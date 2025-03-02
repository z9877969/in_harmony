import connectToDatabase from '@/app/server/lib/mongodb.js';
import { getPayments } from '@/app/server/services/paymentService.js';
import handleApiError from '@/app/server/utils/handleApiError.js';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { type, clientEmail, donateValue, status } = req.query;

    const filters = {
      type: type,
      ...(clientEmail && { clientEmail }),
      ...(status && { status }),
      ...(donateValue !== undefined && { donateValue }),
    };

    const payments = await getPayments(filters);
    return res.status(200).json(payments);
  } catch (error) {
    handleApiError(error, res);
  }
}
