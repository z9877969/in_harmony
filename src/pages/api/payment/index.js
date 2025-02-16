import connectToDatabase from '@/app/server/lib/mongodb';
import { createPayment } from '@/app/server/services/paymentService.js';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Метод не дозволено' });
  }

  try {
    await createPayment(req, res);
  } catch (error) {
    // eslint-disable-next-line
    console.error('Payment Handler Error:', error);
    return res.status(500).json({ error: 'Помилка сервера' });
  }
}
