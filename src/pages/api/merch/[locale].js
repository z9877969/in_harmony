import {
  composeMidlwares,
  connectToDatabase,
  responseError,
  validateBody,
  validateEmptyBody,
  withAuth,
  withMethods,
  validateLocale,
} from '@/app/server/lib';
import { updateMerch } from '@/app/server/services/merchServices';
import * as scm from '@/app/server/schemas';

const methodHandlers = {
  PATCH: composeMidlwares(
    validateLocale,
    validateEmptyBody,
    validateBody(scm.merch.update),
    withAuth,
    updateMerch
  ),
};

export default async function handler(req, res) {
  try {
    await connectToDatabase();
    return withMethods(methodHandlers)(req, res);
  } catch (error) {
    responseError(res, error);
  }
}

/**
 * @swagger
 * /merch/{locale}:
 *   patch:
 *     summary: Оновити дані кнопки мерча
 *     description: Оновлює дані кнопки мерча для обраної мови
 *     tags:
 *       - Merch
 *     parameters:
 *       - name: locale
 *         required: true
 *         in: path
 *         description: Мова кнокпи, дані для якої оновлюють
 *     security:
 *       - accessTokenAuth: []
 *       - refreshTokenAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 $ref: '#/components/examples/merch/status'
 *               content:
 *                 $ref: '#/components/examples/merch/content'
 *               link:
 *                 $ref: '#/components/examples/merch/link'
 *     responses:
 *       200:
 *         description: Успішне оновлення даних
 *       400:
 *         description: Некоректні дані в тілі запиту або некоректна мова
 *       403:
 *         description: Неавторизований доступ
 */
