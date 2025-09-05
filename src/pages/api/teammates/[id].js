import {
  composeMidlwares,
  connectToDatabase,
  upload,
  uploadMiddleware,
  validateBody,
  validateLocale,
  withAuth,
  withMethods,
} from '@/app/server/lib';
import * as scm from '@/app/server/schemas';
import {
  removeTeammate,
  updateTeammate,
} from '@/app/server/services/teammatesServices';
import { isValidId } from '@/app/server/utils';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const methodHandlers = {
  PATCH: composeMidlwares(
    isValidId,
    validateLocale,
    uploadMiddleware(upload.single('image')),
    validateBody(scm.teammate.update),
    withAuth,
    updateTeammate
  ),
  DELETE: composeMidlwares(isValidId, validateLocale, withAuth, removeTeammate),
};

export default async function handler(req, res) {
  await connectToDatabase();
  return withMethods(methodHandlers)(req, res);
}

/**
 * @swagger
 * /teammates/{id}:
 *   delete:
 *     summary: Видаляє учасника команди
 *     description: Видаляє учасника команди по id відповідно до локалі
 *     tags:
 *       - Teammates
 *     parameters:
 *       - name: locale
 *         in: query
 *         required: true
 *         description: Вказує мову якою потрібно отримати контент - en | ua.
 *         schema:
 *           type: string
 *           enum: [en, ua]
 *       - name: id
 *         in: path
 *         required: true
 *         description: Id учасника команди, який видаляється.
 *     security:
 *       - accessTokenAuth: []
 *       - refreshTokenAuth: []
 *     responses:
 *       204:
 *         description: Успішна операція
 *       400:
 *         description: Некоректна локаль
 *       403:
 *         description: Неавторизований доступ
 *       404:
 *         description: Користувач відсутній
 *   patch:
 *     summary: Додає учасника команди
 *     description: Додає в БД дані зі про учасника команди
 *     tags:
 *       - Teammates
 *     parameters:
 *       - name: locale
 *         required: true
 *         in: query
 *         description: Вказує мову якою потрібно отримати контент - en | ua.
 *         schema:
 *           type: string
 *           enum: [en, ua]
 *       - name: id
 *         in: path
 *         required: true
 *         description: Id учасника команди, який видаляється.
 *     security:
 *       - accessTokenAuth: []
 *       - refreshTokenAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 $ref: '#/components/examples/teammate/name'
 *               role:
 *                 $ref: '#/components/examples/teammate/role'
 *               description:
 *                 $ref: '#/components/examples/teammate/description'
 *               image:
 *                 $ref: '#/components/examples/teammate/image'
 *     responses:
 *       200:
 *         description: Успішне оновлення учасника команди
 *       400:
 *         description: Некоректні дані в тілі запиту | Некоректна локаль
 *       403:
 *         description: Неавторизований доступ
 *       404:
 *         description: Користувач відсутній
 */
