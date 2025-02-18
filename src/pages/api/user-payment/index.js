import connectToDatabase from '@/app/server/lib/mongodb';
import { createUserPayment } from '@/app/server/services/userPaymentService';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'POST') {
    return createUserPayment(req, res);
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
