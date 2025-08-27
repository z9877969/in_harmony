import { composeMidlwares, withAuth, withMethods } from '@/app/server/lib';
import connectToDatabase from '@/app/server/lib/mongodb';
import { getMerchData } from '@/app/server/services/merchServices';

export const config = {
  api: {
    externalResolver: true,
  },
};

const methodHandlers = {
  GET: composeMidlwares(withAuth, getMerchData),
};

export default async function handler(req, res) {
  await connectToDatabase();

  return withMethods(methodHandlers)(req, res);
}

/**
 * @swagger
 * /merch:
 *   get:
 *     summary: Повертає контент кнопки мерча
 *     description: Повертає список з різними типами контенту для статусами кнопок мерча в хедері.
 *     tags:
 *       - Merch
 *     security:
 *       - accessTokenAuth: []
 *       - refreshTokenAuth: []
 *     responses:
 *       200:
 *         description: Успішне отримання списку зборів
 *       403:
 *         description: Неавторизований доступ
 */
