import {
  checkAdminRole,
  composeMidlwares,
  connectToDatabase,
  withAuth,
  withMethods,
} from '@/app/server/lib';
import * as s from '@/app/server/services/authServices';

/**
 * @swagger
 * /auth/users:
 *   get:
 *     summary: Отримати список всіх користувачів. Доступний лише для користувача в ролі 'admin'.
 *     description: Повертає список всіх користувачів з ролями
 *     tags: [Auth]
 *     security:
 *       - accessTokenAuth: []
 *       - refreshTokenAuth: []
 *     responses:
 *       200:
 *         description: Успішне отримання даних користувача.
 */

const methodHandlers = {
  GET: composeMidlwares(withAuth, checkAdminRole, s.getAllUsers),
};

export default async function handler(req, res) {
  await connectToDatabase();
  return withMethods(methodHandlers)(req, res);
}
