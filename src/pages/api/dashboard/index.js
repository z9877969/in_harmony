import {
  composeMidlwares,
  validateQuery,
  withAuth,
  withMethods,
} from '@/app/server/lib';
import connectToDatabase from '@/app/server/lib/mongodb';
import { getAllPaymants } from '@/app/server/services/dashboardService';
import * as scm from '@/app/server/schemas';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const methodHandlers = {
  GET: composeMidlwares(
    validateQuery(scm.payments.query),
    withAuth,
    getAllPaymants
  ),
};

export default async function handler(req, res) {
  await connectToDatabase();

  return withMethods(methodHandlers)(req, res);
}

/**
 * @swagger
 * /dashboard:
 *   get:
 *     summary: Повертає дані по оплатам
 *     description: Повертає список даних по оплатам відповідно до параметрів фільтру та сортування.
 *     tags:
 *       - Dashboard
 *     parameters:
 *       - name: perPage
 *         in: query
 *         required: false
 *         description: Вказує кількість даних в порції, які потрібно отримати
 *         schema:
 *           type: integer
 *           default: 6
 *           minimum: 1
 *       - name: page
 *         in: query
 *         required: false
 *         description: Вказує номер порції даних, які потрібно отримати
 *         schema:
 *           type: integer
 *           default: 1
 *           minimum: 1
 *       - name: sortField
 *         in: query
 *         required: false
 *         description: Вказує поле за яким потрібно відсортувати дані. Працює разом з полем sortOrder
 *         schema:
 *           type: string
 *           enum:
 *             - amount
 *             - type
 *             - isPublic
 *             - clientFirstName
 *             - clientEmail
 *             - donateTitle
 *             - donateValue
 *             - message
 *             - orderDate
 *             - status
 *       - name: sortOrder
 *         in: query
 *         required: false
 *         description: Вказує порядок сортування даних asc - зростання, desc - спадання. Працює разом з полем sortField
 *         schema:
 *           type: string
 *           enum:
 *             - asc
 *             - desc
 *       - name: minAmount
 *         in: query
 *         required: false
 *         description: Вказує мінімальне значення суми платежів за яким потрібно відфільтрувати
 *         schema:
 *           type: number
 *           minimum: 0
 *       - name: maxAmount
 *         in: query
 *         required: false
 *         description: Вказує максимальне значення суми платежів за яким потрібно відфільтрувати
 *         schema:
 *           type: number
 *       - name: type
 *         in: query
 *         required: false
 *         description: Вказує значення типу періодичності платежів за яким потрібно відфільтрувати - регулярні або одноразові
 *         schema:
 *           type: string
 *           enum:
 *             - regular
 *             - one-time
 *       - name: isPublic
 *         in: query
 *         required: false
 *         description: Флаг що вказує на побажання опублікувати про донат або відмови такого, за яким потрібно відфільтрувати
 *         schema:
 *           type: boolean
 *       - name: collectionTag
 *         in: query
 *         required: false
 *         description: Унікальний тег збору, за яким потрібно відфільтрувати. Отримується в запиті GET /collections/tags
 *         schema:
 *           type: string
 *       - name: minDate
 *         in: query
 *         required: false
 *         description: Дата нижньої межі періоду здійснення донатів, за якою потрібно відфільтрувати, pattern - ^20(2[5-9]|[3-9][0-9])-(0[1-9]|1[0-2])-([0-2][0-9]|3[01])$
 *         schema:
 *           type: string
 *           pattern: ^20(2[5-9]|[3-9][0-9])-(0[1-9]|1[0-2])-([0-2][0-9]|3[01])$
 *       - name: maxDate
 *         in: query
 *         required: false
 *         description: Дата верхньої межі періоду здійснення донатів, за якою потрібно відфільтрувати, pattern - ^20(2[5-9]|[3-9][0-9])-(0[1-9]|1[0-2])-([0-2][0-9]|3[01])$
 *         schema:
 *           type: string
 *           pattern: ^20(2[5-9]|[3-9][0-9])-(0[1-9]|1[0-2])-([0-2][0-9]|3[01])$
 *       - name: status
 *         in: query
 *         required: false
 *         description: Статус опрацювання платежу платіжною системою, за яким потрібно відфільтрувати
 *         schema:
 *           type: string
 *           enum:
 *             - InProcessing
 *             - WaitingAuthComplete
 *             - Approved
 *             - Pending
 *             - Expired
 *             - Refunded
 *             - Voided
 *             - Declined
 *             - RefundInProcessing
 *             - Active
 *             - Suspended
 *             - Created
 *             - Removed
 *             - Confirmed
 *             - Completed
 *     responses:
 *       200:
 *         description: Успішне отримання списку платежів
 *       400:
 *         description: Помилка валідації
 *       403:
 *         description: Неавторизований доступ
 */
