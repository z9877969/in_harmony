import connectToDatabase from '@/app/server/lib/mongodb.js';
import { upload, uploadMiddleware } from '@/app/server/lib/multer';
import isValidId from '@/app/server/utils/isValidId.js';
import { validateBody, validateLocale, withAuth } from '@/app/server/lib';
import {
  getCollectionById,
  updateCollectionService,
  removeCollectionService,
} from '@/app/server/services/collectionsService.js';
import { composeMidlwares } from '@/app/server/lib/composeMidlwares.js';
import {
  parseDeepStructuredBody,
  validateEmptyBody,
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
  GET: composeMidlwares(isValidId, validateLocale, getCollectionById),
  PATCH: composeMidlwares(
    isValidId,
    validateLocale,
    withAuth,
    uploadMiddleware(upload.single('image')),
    validateEmptyBody,
    parseDeepStructuredBody(['long_desc']),
    validateBody(scm.collection.update),
    updateCollectionService
  ),
  DELETE: composeMidlwares(
    isValidId,
    validateLocale,
    withAuth,
    removeCollectionService
  ),
};

export default async function handler(req, res) {
  await connectToDatabase();

  return withMethods(methodHandlers)(req, res);
}

/**
 * @swagger
 * /collections/{locale}/{id}:
 *   get:
 *     summary: Повертає дані про збір
 *     description: Повертає інформацію про збір
 *     tags:
 *       - Collections
 *     parameters:
 *       - name: locale
 *         in: path
 *         required: true
 *         description: Вказує мову якою створено збір.
 *         schema:
 *           type: string
 *           enum: [en, ua]
 *       - name: id
 *         in: path
 *         required: true
 *         description: Id збору
 *     responses:
 *       200:
 *         description: Успішне отримання даних про збір
 *       404:
 *         description: Збір відсутній
 *   patch:
 *     summary: Оновлює дані про збір
 *     description: Оновлює інформацію про збір
 *     tags:
 *       - Collections
 *     parameters:
 *       - name: locale
 *         in: path
 *         required: true
 *         description: Вказує мову якою було створено контент - en | ua
 *         schema:
 *           type: string
 *           enum: [en, ua]
 *       - name: id
 *         in: path
 *         required: true
 *         description: Id збору який оновлюється
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
 *               title:
 *                 $ref: '#/components/examples/collection/title'
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
 *               image:
 *                 $ref: '#/components/examples/collection/image'
 *     responses:
 *       200:
 *         description: Успішне оновлення збору
 *       400:
 *         description: Помилка валідації або некоректний Id
 *       403:
 *         description: Неавторизований доступ
 *       404:
 *         description: Збір відсутній
 *   delete:
 *     summary: Видалити збір
 *     description: Видаляє збір з БД.
 *     tags:
 *       - Collections
 *     parameters:
 *       - name: locale
 *         in: path
 *         required: true
 *         description: Вказує мову якою створено збір.
 *         schema:
 *           type: string
 *           enum: [en, ua]
 *       - name: id
 *         in: path
 *         required: true
 *         description: Id збору
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
 *         description: Збір відсутній
 */
