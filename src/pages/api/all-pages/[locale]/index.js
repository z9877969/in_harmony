import { getPage } from '@/app/server/services/pagesServices.js';
import connectToDatabase from '@/app/server/lib/mongodb';

/**
 * @swagger
 * /all-pages/{locale}:
 *   get:
 *     summary: Отримати одного користувача за ID
 *     description: Повертає повну інформацію про одного користувача.
 *     tags: [Pages]
 *     parameters:
 *       - in: path
 *         name: locale
 *         required: true
 *         schema:
 *           type: string
 *           default: 'en'
 *           enum: ['en', 'uk']
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             required: ['name']
 *             type: object
 *             properties:
 *               name:
 *                 $ref: '#/components/examples/page/name'
 *               descr:
 *                 $ref: '#/components/examples/page/descr'
 *     responses:
 *       200:
 *         description: Успішне отримання даних користувача.
 */

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default async function handler(req, res) {
  await connectToDatabase();
  if (req.method === 'GET') {
    return getPage(req, res);
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}
