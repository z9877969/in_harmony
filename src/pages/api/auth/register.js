import {
  checkAdminRole,
  composeMidlwares,
  connectToDatabase,
  withAuth,
  withMethods,
} from '@/app/server/lib';
import { registerUser } from '@/app/server/services/authServices';
import { validateBody } from '@/app/server/lib';
import * as scm from '@/app/server/schemas';

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Зареєструвати користувача
 *     description: Реєструє користувача в БД для подальшої авторизації та взаємодії з приватними ендпоінтами. Доступний лише для користувача в ролі 'admin'.
 *     tags: [Auth]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             required: ['name', 'email', 'password']
 *             type: object
 *             properties:
 *               name:
 *                 $ref: '#/components/examples/user/name'
 *               email:
 *                 $ref: '#/components/examples/user/email'
 *               password:
 *                 $ref: '#/components/examples/user/password'
 *               role:
 *                 $ref: '#/components/examples/user/role'
 *     responses:
 *       200:
 *         description: Успішне отримання даних користувача.
 */

const methodHandlers = {
  POST: composeMidlwares(
    validateBody(scm.user.registration),
    withAuth,
    checkAdminRole,
    registerUser
  ),
};

export default async function handler(req, res) {
  await connectToDatabase();
  return withMethods(methodHandlers)(req, res);
}
