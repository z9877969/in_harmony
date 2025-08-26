import { composeMidlwares, withAuth, withMethods } from '@/app/server/lib';
import connectToDatabase from '@/app/server/lib/mongodb';
import { getCollectionTags } from '@/app/server/services/collectionsService.js';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const methodHandlers = {
  GET: composeMidlwares(withAuth, getCollectionTags),
};

export default async function handler(req, res) {
  await connectToDatabase();

  return withMethods(methodHandlers)(req, res);
}

/**
 * @swagger
 * /collections/tags:
 *   get:
 *     summary: Повертає список тегів
 *     description: Повертає список тегів якими групуються однакові збори свторені різними мовами
 *     tags:
 *       - Collections
 *     responses:
 *       200:
 *         description: Успішне отримання списку тегів
 *       403:
 *         description: Неавторизований доступ
 */
