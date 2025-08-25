import {
  composeMidlwares,
  connectToDatabase,
  validateBody,
  withMethods,
} from '@/app/server/lib';
import { loginUser } from '@/app/server/services/authServices';
import * as scm from '@/app/server/schemas';

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Авторизувати юзера
 *     description: Авторизує юзера в БД для подальшої взаємодії з приватними ендпоінтами
 *     tags: [Auth]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             required: ['email', 'password']
 *             type: object
 *             properties:
 *               email:
 *                 $ref: '#/components/examples/user/email'
 *               password:
 *                 $ref: '#/components/examples/user/password'
 *     responses:
 *       200:
 *         description: Успішне отримання даних користувача.
 *       400:
 *         descritpion: Некоректне тіло запиту
 *       401:
 *         descritpion: Некоректні email або пароль
 *       404:
 *         description: Користувач відсутній
 *
 */

const methodHandlers = {
  POST: composeMidlwares(validateBody(scm.user.login), loginUser),
};

export default async function handler(req, res) {
  await connectToDatabase();
  return withMethods(methodHandlers)(req, res);
}
