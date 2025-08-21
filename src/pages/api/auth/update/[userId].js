import {
  checkAdminRole,
  composeMidlwares,
  connectToDatabase,
  withAuth,
  withMethods,
} from '@/app/server/lib';
import { updateUser } from '@/app/server/services/authServices';
import { validateBody } from '@/app/server/lib';
import * as scm from '@/app/server/schemas';

/**
 * @swagger
 * /auth/update/{userId}:
 *   put:
 *     summary: Оновити дані користувача
 *     description: Оновлює дані одного щ користувачів в БД. Доступний лише для користувача в ролі 'admin'.
 *     tags: [Auth]
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
 *     responses:
 *       200:
 *         description: Успішне отримання даних користувача.
 */

const methodHandlers = {
  PUT: composeMidlwares(
    validateBody(scm.user.update),
    withAuth,
    checkAdminRole,
    updateUser
  ),
};

export default async function handler(req, res) {
  await connectToDatabase();
  return withMethods(methodHandlers)(req, res);
}
