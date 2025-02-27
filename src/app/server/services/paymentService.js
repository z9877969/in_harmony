import { PAYMENT_CONFIG } from '@/shared/constants/index.js';

import PaymentModel from '../models/PaymentModels/Payment.js';
import generateHash from '../utils/generateHash.js';

export const getPayments = async (filters = {}) => {
  const { type = 'regular', clientEmail, donateValue, status } = filters;

  const query = {
    type,
    ...(clientEmail && { clientEmail }),
    ...(status && { status: { $ne: status } }),
    ...(donateValue !== undefined && { donateValue }),
  };

  const payments = await PaymentModel.find(query);

  return payments;
};

export const createPayment = async (req, res) => {
  const {
    amount,
    type,
    isPublic,
    clientFirstName,
    clientEmail,
    message,
    donateTitle,
    donateValue,
    status,
  } = req.body;

  if ((!amount || !type || !donateTitle, !donateValue)) {
    const message = `Поля сума, тип донату(одноразово/щомісячно) та призначення донату є обов’язковими `;
    const error = new Error(message);
    error.statusCode = 400;
    throw error;
  }

  const foundedPayments = await getPayments({
    type,
    clientEmail,
    donateValue,
    status: 'Declined',
  });

  if (foundedPayments.length > 0) {
    const message = `Ви вже маєте регулярні платежі: ${foundedPayments.map((p) => `${p._id.toString()} ${p.donateTitle}`)} `;

    const error = new Error(message);
    error.statusCode = 409;
    throw error;
  }

  try {
    const orderDate = Math.floor(Date.now() / 1000);

    const host = req.headers.host;
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const serverUrl = `${protocol}://${host}`;

    const payment = new PaymentModel({
      amount,
      type,
      isPublic,
      clientFirstName,
      clientEmail,
      message,
      donateTitle,
      donateValue,
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
    } = PAYMENT_CONFIG;

    const controlString = `${merchantAccount};${merchantDomainName};${orderReference};${orderDate};${amount};${currency};${donateTitle};${productCount};${amount}`;

    const merchantSignature = generateHash(controlString, key);

    const data = {
      orderReference,
      merchantSignature,
      orderDate,
      amount,
      type,
      clientFirstName,
      clientEmail,
      donateTitle,
      donateValue,
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
      appBaseURL: serverUrl,
    };

    return res.status(201).json(data);
  } catch (error) {
    const message = `Помилка при створенні платежу: ${error}`;
    const e = new Error(message);
    e.statusCode = 500;
    throw e;
  }
};
