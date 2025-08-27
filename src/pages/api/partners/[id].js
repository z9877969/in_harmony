import connectToDatabase from '@/app/server/lib/mongodb.js';
import isValidId from '@/app/server/utils/isValidId.js';
import {
  removePartner,
  updatePartner,
} from '@/app/server/services/partnersService.js';
import {
  composeMidlwares,
  uploadMiddleware,
  upload,
  validateEmptyBody,
  withAuth,
  withMethods,
  validateBody,
} from '@/app/server/lib';
import * as scm from '@/app/server/schemas';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const methodHandlers = {
  DELETE: composeMidlwares(isValidId, withAuth, removePartner),
  PATCH: composeMidlwares(
    isValidId,
    withAuth,
    uploadMiddleware(upload.single('image')),
    validateEmptyBody,
    validateBody(scm.partner.update),
    updatePartner
  ),
};

export default async function handler(req, res) {
  await connectToDatabase();

  return withMethods(methodHandlers)(req, res);
}

/**
 * @swagger
 * /partners/{id}:
 *   patch:
 *     summary: Оновити дані партнера
 *     description: Оновлює дані партнера в БД
 *     tags:
 *       - Partners
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id партнера, дані якого оновлюють
 *     security:
 *       - accessTokenAuth: []
 *       - refreshTokenAuth: []
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 $ref: '#/components/examples/partner/image'
 *               logo:
 *                 $ref: '#/components/examples/partner/logo'
 *               link:
 *                 $ref: '#/components/examples/partner/link'
 *               language:
 *                 $ref: '#/components/examples/partner/language'
 *
 *     responses:
 *       200:
 *         description: Успішне оновлення даних про партнера
 *       400:
 *         description: Некоректні дані в тілі запиту або некоректний Id
 *       403:
 *         description: Неавторизований доступ
 *       404:
 *         description: Партнер відсутній в БД
 *   delete:
 *     summary: Видалити партнера
 *     description: Видаляє дані про партнера з БД
 *     tags:
 *       - Partners
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id партнера який видаляють
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
 *         description: Партнер відсутній
 */
