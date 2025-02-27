import connectToDatabase from '@/app/server/lib/mongodb';
import { createPayment } from '@/app/server/services/paymentService.js';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Метод не дозволено' });
  }

  try {
    const result = await createPayment(req, res);
    return res.status(201).json({ message: 'Платіж створено', data: result });
  } catch (error) {
    const statusCode = error.statusCode || 500;
    const message = error.message;
    return res.status(statusCode).json({ message: message });
  }
}
