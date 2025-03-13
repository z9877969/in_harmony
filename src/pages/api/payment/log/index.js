import connectToDatabase from '@/app/server/lib/mongodb.js';
import {
  createPaymentLog,
  updatePaymentStatus,
} from '@/app/server/services/paymentService.js';
import handleApiError from '@/app/server/utils/handleApiError.js';
import parseRequestBody from '@/app/server/utils/parseRequestBody.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    await connectToDatabase();
    const parsedBody = parseRequestBody(req);
    const paymentLog = await createPaymentLog(parsedBody);
    await updatePaymentStatus(parsedBody);

    return res.status(201).json(paymentLog);
  } catch (error) {
    handleApiError(error, res);
  }
}
