import {
  composeMidlwares,
  parseDeepStructuredBody,
  validateBody,
  validateEmptyBody,
  validateLocale,
  withAuth,
  withMethods,
} from '@/app/server/lib';
import connectToDatabase from '@/app/server/lib/mongodb';
import { upload, uploadMiddleware } from '@/app/server/lib/multer';
import {
  createCollection,
  getAllCollections,
} from '@/app/server/services/collectionsService.js';
import * as scm from '@/app/server/schemas';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const methodHandlers = {
  GET: composeMidlwares(validateLocale, getAllCollections),
  POST: composeMidlwares(
    validateLocale,
    withAuth,
    uploadMiddleware(upload.single('image')),
    parseDeepStructuredBody(['long_desc']),
    validateEmptyBody,
    validateBody(scm.collection.create),
    createCollection
  ),
};

export default async function handler(req, res) {
  await connectToDatabase();

  return withMethods(methodHandlers)(req, res);
}

/**
 * @swagger
 * /collections/{locale}:
 *   get:
 *     summary: Повертає список зборів
 *     description: Повертає список зборів та фільтрує по вказаним параметрам
 *     tags:
 *       - Collections
 *     parameters:
 *       - name: locale
 *         in: path
 *         required: true
 *         description: Вказує мову якою потрібно отримати контент - en | ua
 *         schema:
 *           type: string
 *           enum: [en, ua]
 *       - name: page
 *         in: query
 *         required: false
 *         description: Вказує номер порції даних, які потрібно отримати
 *         schema:
 *           type: integer
 *           default: 1
 *       - name: perPage
 *         in: query
 *         required: false
 *         description: Вказує кількість даних в порції, які потрібно отримати
 *         schema:
 *           type: integer
 *           default: 6
 *     responses:
 *       200:
 *         description: Успішне отримання списку зборів
 *   post:
 *     summary: Створює новий збір
 *     description: Створює збір та додає інформацію про нього
 *     tags:
 *       - Collections
 *     parameters:
 *       - name: locale
 *         in: path
 *         required: true
 *         description: Вказує мову якою створюється контент - en | ua
 *         schema:
 *           type: string
 *           enum: [en, ua]
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
 *               - image
 *               - title
 *               - collected
 *               - target
 *               - alt
 *               - peopleDonate
 *               - peopleDonate_title
 *               - desc
 *               - period
 *               - value
 *               - long_desc
 *               - importance
 *             properties:
 *               title:
 *                 $ref: '#/components/examples/collection/title'
 *               image:
 *                 $ref: '#/components/examples/collection/image'
 *               collected:
 *                 $ref: '#/components/examples/collection/collected'
 *               target:
 *                 $ref: '#/components/examples/collection/target'
 *               alt:
 *                 $ref: '#/components/examples/collection/alt'
 *               peopleDonate:
 *                 $ref: '#/components/examples/collection/peopleDonate'
 *               peopleDonate_title:
 *                 $ref: '#/components/examples/collection/peopleDonate_title'
 *               desc:
 *                 $ref: '#/components/examples/collection/desc'
 *               days:
 *                 $ref: '#/components/examples/collection/days'
 *               period:
 *                 $ref: '#/components/examples/collection/period'
 *               quantity:
 *                 $ref: '#/components/examples/collection/quantity'
 *               status:
 *                 $ref: '#/components/examples/collection/status'
 *               value:
 *                 $ref: '#/components/examples/collection/value'
 *               importance:
 *                 $ref: '#/components/examples/collection/importance'
 *               long_desc:
 *                 $ref: '#/components/examples/collection/long_desc'
 *     responses:
 *       201:
 *         description: Успішне створення збору
 *       400:
 *         description: Помилка валідації
 *       403:
 *         description: Неавторизований доступ
 */
