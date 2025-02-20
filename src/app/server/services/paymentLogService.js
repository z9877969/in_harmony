import { PAYMENT_CONFIG } from '@/shared/constants/index.js';
import PaymentLogModel from '../models/PaymentLogModel/PaymentLogModel.js';
import generateHash from '../utils/generateHash.js';

export const createLogPayment = async (req, res) => {
  try {
    let parsedBody;

    try {
      parsedBody =
        typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

      const firstKey = Object.keys(parsedBody)[0];
      if (
        typeof firstKey === 'string' &&
        firstKey.includes('merchantAccount')
      ) {
        parsedBody = JSON.parse(firstKey);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(' Error parsing req.body:', error);
      return res.status(400).json({ message: 'Invalid request body' });
    }

    const { key } = PAYMENT_CONFIG;
    const status = 'accept';
    const time = Math.floor(Date.now() / 1000);
    const { orderReference } = parsedBody;

    await new PaymentLogModel(parsedBody).save();

    return res.status(201).json({
      orderReference,
      status,
      time,
      signature: generateHash(`${orderReference};${status};${time}`, key),
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(' Error creating payment log:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
