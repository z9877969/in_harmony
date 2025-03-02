import connectToDatabase from '@/app/server/lib/mongodb';
import { createPayment } from '@/app/server/services/paymentService.js';
import handleApiError from '@/app/server/utils/handleApiError.js';
import createHttpError from 'http-errors';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const host = req.headers.host;
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const serverUrl = `${protocol}://${host}`;

  try {
    const body = req.body;
    if (!req.body) {
      throw createHttpError(400, 'Request body is missing');
    }
    const data = await createPayment({ ...body, serverUrl });
    return res.status(201).json({ message: 'Payment created', data });
  } catch (error) {
    handleApiError(error, res);
  }
}
