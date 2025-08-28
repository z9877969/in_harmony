import {
  checkAdminRole,
  composeMidlwares,
  connectToDatabase,
  withAuth,
  withMethods,
} from '@/app/server/lib';
import { removeUser, updateUser } from '@/app/server/services/authServices';
import { validateBody } from '@/app/server/lib';
import * as scm from '@/app/server/schemas';
import { isValidId } from '@/app/server/utils';

/**
 * @swagger
 * /auth/users/{userId}:
 *   patch:
 *     summary: Оновити дані користувача
 *     description: Оновлює дані одного щ користувачів в БД. Доступний лише для користувача в ролі 'admin'.
 *     tags: [Auth]
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: Id користувача дані якого оновлюють
 *     security:
 *       - accessTokenAuth: []
 *       - refreshTokenAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 $ref: '#/components/examples/user/name'
 *               email:
 *                 $ref: '#/components/examples/user/email'
 *               role:
 *                 $ref: '#/components/examples/user/role'
 *               password:
 *                 $ref: '#/components/examples/user/password'
 *     responses:
 *       200:
 *         description: Успішне отримання даних користувача.
 *       400:
 *         description: Некоректний Id
 *       403:
 *         description: Неавторизований доступ
 *       404:
 *         description: Користувач відсутній
 *   delete:
 *     summary: Видалити користувача
 *     description: Видаляє користувача з БД. Доступний лише для користувача в ролі 'admin'.
 *     tags: [Auth]
 *     parameters:
 *       - name: userId
 *         required: true
 *         in: path
 *         description: Id користувача якого видаляють
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
 *         description: Користувач відсутній
 */

const methodHandlers = {
  PATCH: composeMidlwares(
    isValidId,
    validateBody(scm.user.update),
    withAuth,
    checkAdminRole,
    updateUser
  ),
  DELETE: composeMidlwares(isValidId, withAuth, checkAdminRole, removeUser),
};

export default async function handler(req, res) {
  await connectToDatabase();
  return withMethods(methodHandlers)(req, res);
}
