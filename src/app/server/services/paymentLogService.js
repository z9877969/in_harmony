import { PAYMENT_CONFIG } from '@/shared/constants/index.js';
import PaymentLogModel from '../models/PaymentLogModel/PaymentLogModel.js';
import generateHash from '../utils/generateHash.js';

export const createLogPayment = async (req, res) => {
  try {
    const {
      orderReference,
      merchantAccount,
      merchantSignature,
      amount,
      currency,
      authCode,
      email,
      phone,
      createdDate,
      processingDate,
      cardPan,
      cardType,
      issuerBankCountry,
      issuerBankName,
      recToken,
      transactionStatus,
      reason,
      reasonCode,
      fee,
      paymentSystem,
      acquirerBankName,
      cardProduct,
      clientName,
    } = req.body;

    // eslint-disable-next-line no-console
    console.log('>>>>>>>>>>> paymentLogService body: ', req.body);

    const status = 'accept';
    const time = Math.floor(Date.now() / 1000);
    const { key } = PAYMENT_CONFIG;

    const paymentLog = new PaymentLogModel({
      merchantAccount,
      merchantSignature,
      orderReference,
      amount,
      currency,
      authCode,
      email,
      phone,
      createdDate,
      processingDate,
      cardPan,
      cardType,
      issuerBankCountry,
      issuerBankName,
      recToken,
      transactionStatus,
      reason,
      reasonCode,
      fee,
      paymentSystem,
      acquirerBankName,
      cardProduct,
      clientName,
    });

    await paymentLog.save();

    const controlString = `${orderReference};${status};${time}`;
    const signature = generateHash(controlString, key);

    return res.status(201).json({
      orderReference,
      status,
      time,
      signature,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
