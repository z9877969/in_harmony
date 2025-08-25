import {
  composeMidlwares,
  connectToDatabase,
  withAuth,
  withMethods,
} from '@/app/server/lib';
import { logoutUser } from '@/app/server/services/authServices';

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Розлогінити юзера
 *     description: Роздлгінює юзера і видаляє сесію в БД
 *     tags: [Auth]
 *     security:
 *       - accessTokenAuth: []
 *       - refreshTokenAuth: []
 *     responses:
 *       204:
 *         description: Успішне операція.
 */

const methodHandlers = {
  POST: composeMidlwares(withAuth, logoutUser),
};

export default async function handler(req, res) {
  await connectToDatabase();
  return withMethods(methodHandlers)(req, res);
}
