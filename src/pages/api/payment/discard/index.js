import connectToDatabase from '@/app/server/lib/mongodb.js';
import { cancelRegularPayment } from '@/app/server/services/paymentService.js';
import handleApiError from '@/app/server/utils/handleApiError.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    await connectToDatabase();
    const updatedPayment = await cancelRegularPayment(req.body);

    return res.status(200).json(updatedPayment);
  } catch (error) {
    handleApiError(error, res);
  }
}
