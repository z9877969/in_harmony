import {
  composeMidlwares,
  connectToDatabase,
  responseError,
  validateEmptyBody,
  withAuth,
  withMethods,
} from '@/app/server/lib';
import {
  removeReport,
  updateReport,
} from '@/app/server/services/reportsServices';
import { validateBody } from '@/app/server/lib';
import * as scm from '@/app/server/schemas';
import { isValidId } from '@/app/server/utils';

const methodHandlers = {
  PATCH: composeMidlwares(
    isValidId,
    validateEmptyBody,
    validateBody(scm.report.update),
    withAuth,
    updateReport
  ),
  DELETE: composeMidlwares(isValidId, withAuth, removeReport),
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
 * /reports/{id}:
 *   patch:
 *     summary: Оновити дані звіту
 *     description: Оновлює дані одного звіту в БД
 *     tags:
 *       - Reports
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id звіту, дані якого оновлюють
 *     security:
 *       - accessTokenAuth: []
 *       - refreshTokenAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
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
 *       200:
 *         description: Успішне оновлення звіту
 *       400:
 *         description: Некоректні дані в тілі запиту або некоректний Id
 *       403:
 *         description: Неавторизований доступ
 *       404:
 *         description: Звіт відсутній
 *   delete:
 *     summary: Видалити звіт
 *     description: Видаляє звіт з БД
 *     tags: [Reports]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id звіту який видаляють
 *     security:
 *       - accessTokenAuth: []
 *       - refreshTokenAuth: []
 *     responses:
 *       204:
 *         description: Успішна операція
 *       400:
 *         description: Некоректний Id
 *       403:
 *         description: Неавторизований доступ
 *       404:
 *         description: Звіт відсутній
 */
