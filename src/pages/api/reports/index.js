import {
  composeMidlwares,
  validateBody,
  validateEmptyBody,
  withAuth,
  withMethods,
} from '@/app/server/lib';
import connectToDatabase from '@/app/server/lib/mongodb';
import {
  createReport,
  getAllReports,
} from '@/app/server/services/reportsServices';
import * as scm from '@/app/server/schemas';

export const config = {
  api: {
    externalResolver: true,
  },
};

const methodHandlers = {
  GET: composeMidlwares(withAuth, getAllReports),
  POST: composeMidlwares(
    validateEmptyBody,
    validateBody(scm.report.create),
    withAuth,
    createReport
  ),
};

export default async function handler(req, res) {
  await connectToDatabase();

  return withMethods(methodHandlers)(req, res);
}

/**
 * @swagger
 * /reports:
 *   get:
 *     summary: Повертає список звітів
 *     description: Повертає список звітів відповідно до обраної мови
 *     tags:
 *       - Reports
 *     parameters:
 *       - name: locale
 *         in: query
 *         required: true
 *         description: Вказує мову якою потрібно отримати контент - en | ua. За замовучуванням ua.
 *         schema:
 *           type: string
 *           enum: [en, ua]
 *           default: ua
 *     security:
 *       - accessTokenAuth: []
 *       - refreshTokenAuth: []
 *     responses:
 *       200:
 *         description: Успішне отримання списку зборів
 *       403:
 *         description: Неавторизований доступ
 *   post:
 *     summary: Створює звіт
 *     description: Додає в БД дані зі звітом за вказаний місяць однією з мов
 *     tags:
 *       - Reports
 *     security:
 *       - accessTokenAuth: []
 *       - refreshTokenAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             required: ['year', 'month', 'url', 'language']
 *             type: object
 *             properties:
 *               year:
 *                 $ref: '#/components/examples/report/year'
 *               month:
 *                 $ref: '#/components/examples/report/month'
 *               url:
 *                 $ref: '#/components/examples/report/url'
 *               language:
 *                 $ref: '#/components/examples/report/language'
 *     responses:
 *       201:
 *         description: Успішне створення звіту
 *       400:
 *         description: Некоректні дані в тілі запиту
 *       403:
 *         description: Неавторизований доступ
 */
