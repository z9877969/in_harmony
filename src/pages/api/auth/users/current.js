import {
  composeMidlwares,
  connectToDatabase,
  withAuth,
  withMethods,
} from '@/app/server/lib';
import * as s from '@/app/server/services/authServices';

/**
 * @swagger
 * /auth/users/current:
 *   get:
 *     summary: Отримати інформацію про поточного користувача.
 *     description: Повертає дані поточного авторизованого користувача.
 *     tags: [Auth]
 *     security:
 *       - accessTokenAuth: []
 *       - refreshTokenAuth: []
 *     responses:
 *       200:
 *         description: Успішне отримання даних користувача.
 */

const methodHandlers = {
  GET: composeMidlwares(withAuth, s.getCurUser),
};

export default async function handler(req, res) {
  await connectToDatabase();
  return withMethods(methodHandlers)(req, res);
}
