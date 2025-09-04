import {
  composeMidlwares,
  validateBody,
  withAuth,
  withMethods,
} from '@/app/server/lib';
import connectToDatabase from '@/app/server/lib/mongodb';
import {
  getStatsData,
  updateStatsData,
} from '@/app/server/services/statsServices';
import * as scm from '@/app/server/schemas';

export const config = {
  api: {
    externalResolver: true,
  },
};

const methodHandlers = {
  GET: composeMidlwares(withAuth, getStatsData),
  PUT: composeMidlwares(
    validateBody(scm.stats.update),
    withAuth,
    updateStatsData
  ),
};

export default async function handler(req, res) {
  await connectToDatabase();

  return withMethods(methodHandlers)(req, res);
}

/**
 * @swagger
 * /stats:
 *   get:
 *     summary: Повертає дані зі статистикою
 *     description: Повертає статистичні дані загальні для всіх локалей.
 *     tags:
 *       - Stats
 *     security:
 *       - accessTokenAuth: []
 *       - refreshTokenAuth: []
 *     responses:
 *       200:
 *         description: Успішне отримання списку зборів
 *       403:
 *         description: Неавторизований доступ
 *   put:
 *     summary: Оновлює дані статисники
 *     description: Змінює в БД статистичні дані щодо виконаної допомоги
 *     tags:
 *       - Stats
 *     security:
 *       - accessTokenAuth: []
 *       - refreshTokenAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fedPeople
 *               - providedWithClothing
 *               - providedWithWater
 *               - receivedMedications
 *               - fedAnimals
 *               - providedWithElectricity
 *             properties:
 *               fedPeople:
 *                 $ref: '#/components/examples/stats/fedPeople'
 *               providedWithClothing:
 *                 $ref: '#/components/examples/stats/providedWithClothing'
 *               providedWithWater:
 *                 $ref: '#/components/examples/stats/providedWithWater'
 *               receivedMedications:
 *                 $ref: '#/components/examples/stats/receivedMedications'
 *               fedAnimals:
 *                 $ref: '#/components/examples/stats/fedAnimals'
 *               providedWithElectricity:
 *                 $ref: '#/components/examples/stats/providedWithElectricity'
 *     responses:
 *       204:
 *         description: Успішне оновлення статистики
 *       400:
 *         description: Некоректні дані в тілі запиту
 *       403:
 *         description: Неавторизований доступ
 */
