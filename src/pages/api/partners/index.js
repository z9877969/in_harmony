import { composeMidlwares } from '@/app/server/lib/composeMidlwares.js';
import connectToDatabase from '@/app/server/lib/mongodb';
import {
  createPartner,
  getAllPartners,
} from '@/app/server/services/partnersService.js';
import {
  validateBody,
  validateEmptyBody,
  withAuth,
  uploadMiddleware,
  upload,
  withMethods,
} from '@/app/server/lib/index.js';
import * as scm from '@/app/server/schemas';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const methodHandlers = {
  GET: composeMidlwares(getAllPartners),
  POST: composeMidlwares(
    withAuth,
    uploadMiddleware(upload.single('image')),
    validateEmptyBody,
    validateBody(scm.partner.create),
    createPartner
  ),
};

export default async function handler(req, res) {
  await connectToDatabase();

  return withMethods(methodHandlers)(req, res);
}

/**
 * @swagger
 * /partners:
 *   get:
 *     summary: Повертає список партнерів
 *     description: Повертає список партнерів
 *     tags:
 *       - Partners
 *     responses:
 *       200:
 *         description: Успішне отримання списку партнерів
 *   post:
 *     summary: Додає нового партнера
 *     description: Створює партнера в БД та додає інформацію про нього
 *     tags:
 *       - Partners
 *     security:
 *       - accessTokenAuth: []
 *       - refreshTokenAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - logo
 *               - link
 *               - language
 *               - image
 *             properties:
 *               image:
 *                 $ref: '#/components/examples/partner/image'
 *               logo:
 *                 $ref: '#/components/examples/partner/logo'
 *               link:
 *                 $ref: '#/components/examples/partner/link'
 *               language:
 *                 $ref: '#/components/examples/partner/language'
 *     responses:
 *       201:
 *         description: Успішне створення збору
 *       400:
 *         description: Помилка валідації
 *       403:
 *         description: Неавторизований доступ
 */
