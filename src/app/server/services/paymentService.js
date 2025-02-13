import { PAYMENT_CONFIG } from '@/shared/constants/index.js';

import PaymentModel from '../models/PaymentModels/Payment.js';
import generateHash from '../utils/generateHash.js';

export const createPayment = async (req, res) => {
  const {
    amount,
    type,
    clientFirstName,
    clientLastName,
    clientEmail,
    paymentPurpose,
    status,
  } = req.body;

  if (!amount || !type || !paymentPurpose) {
    return res.status(400).json({
      error: 'Поля сума, тип платежу та призначення плаьежу є обов’язковими',
    });
  }

  try {
    const orderDate = Math.floor(Date.now() / 1000);

    const payment = new PaymentModel({
      amount,
      type,
      clientFirstName,
      clientLastName,
      clientEmail,
      paymentPurpose,
      orderDate,
      status,
    });

    await payment.save();

    const orderReference = payment._id.toString();

    const {
      key,
      merchantAccount,
      merchantDomainName,
      currency,
      productCount,
      paymentUrl,
      language,
      orderTimeout,
      merchantAuthType,
      defaultPaymentSystem,
      regularBehavior,
      regularMode,
      regularOn,
      regularCount,
      appBaseURL,
    } = PAYMENT_CONFIG;

    const controlString = `${merchantAccount};${merchantDomainName};${orderReference};${orderDate};${amount};${currency};${paymentPurpose};${productCount};${amount}`;

    const merchantSignature = generateHash(controlString, key);

    const data = {
      orderReference,
      merchantSignature,
      orderDate,
      amount,
      type,
      clientFirstName,
      clientLastName,
      clientEmail,
      paymentPurpose,
      status,
      currency,
      merchantAccount,
      merchantDomainName,
      productCount,
      paymentUrl,
      language,
      orderTimeout,
      merchantAuthType,
      defaultPaymentSystem,
      regularBehavior,
      regularMode,
      regularOn,
      regularCount,
      appBaseURL,
    };

    return res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
