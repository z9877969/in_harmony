import connectToDatabase from '@/app/server/lib/mongodb.js';
import {
  cancelRegularPayment,
  checkRegularPaymentStatus,
  updatePaymentStatus,
} from '@/app/server/services/paymentService.js';
import handleApiError from '@/app/server/utils/handleApiError.js';
import { PAYMENT_STATUSES } from '@/shared/constants/index.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  await connectToDatabase();

  try {
    const { status, reason } = await checkRegularPaymentStatus(req.body);

    if (status === PAYMENT_STATUSES.ACTIVE) {
      const updatedPayment = await cancelRegularPayment(req.body);
      return res.status(200).json(updatedPayment);
    }
    const updatedPayment = await updatePaymentStatus({
      orderReference: req.body.orderReference,
      transactionStatus: status,
      cancellationReason: reason,
    });

    return res.status(200).json(updatedPayment);
  } catch (error) {
    handleApiError(error, res);
  }
}
