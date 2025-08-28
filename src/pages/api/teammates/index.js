import {
  composeMidlwares,
  connectToDatabase,
  upload,
  uploadMiddleware,
  validateBody,
  validateEmptyBody,
  withAuth,
  withMethods,
} from '@/app/server/lib';
import {
  createTeammate,
  getTeammates,
} from '@/app/server/services/teammatesServices';
import * as scm from '@/app/server/schemas';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const methodHandlers = {
  GET: composeMidlwares(withAuth, getTeammates),
  POST: composeMidlwares(
    withAuth,
    uploadMiddleware(upload.single('image')),
    validateEmptyBody,
    validateBody(scm.teammate.create),
    createTeammate
  ),
};

export default async function handler(req, res) {
  await connectToDatabase();
  return withMethods(methodHandlers)(req, res);
}

/**
 * @swagger
 * /teammates:
 *   get:
 *     summary: Повертає учасників команди
 *     description: Повертає список учасників команди
 *     tags:
 *       - Teammates
 *     parameters:
 *       - name: locale
 *         in: query
 *         description: Вказує мову якою потрібно отримати контент - en | ua.
 *         schema:
 *           type: string
 *           enum: [en, ua]
 *           default: ua
 *     security:
 *       - accessTokenAuth: []
 *       - refreshTokenAuth: []
 *     responses:
 *       200:
 *         description: Успішне отримання списку учасників команди
 *       400:
 *         description: Некоректна локаль
 *       403:
 *         description: Неавторизований доступ
 *   post:
 *     summary: Додає учасника команди
 *     description: Додає в БД дані зі про учасника команди
 *     tags:
 *       - Teammates
 *     security:
 *       - accessTokenAuth: []
 *       - refreshTokenAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required: ['name', 'role', 'description', 'image', 'locale']
 *             properties:
 *               name:
 *                 $ref: '#/components/examples/teammate/name'
 *               role:
 *                 $ref: '#/components/examples/teammate/role'
 *               description:
 *                 $ref: '#/components/examples/teammate/description'
 *               image:
 *                 $ref: '#/components/examples/teammate/image'
 *               locale:
 *                 $ref: '#/components/examples/teammate/locale'
 *     responses:
 *       201:
 *         description: Успішне створення учасника команди
 *       400:
 *         description: Некоректні дані в тілі запиту | Некоректна локаль
 *       403:
 *         description: Неавторизований доступ
 */
