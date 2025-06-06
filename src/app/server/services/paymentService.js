import {
  DONATE_TYPE,
  PAYMENT_CONFIG,
  PAYMENT_STATUSES,
} from '@/shared/constants/index.js';

import createHttpError from 'http-errors';
import { Types } from 'mongoose';
import PaymentLogModel from '../models/PaymentLogModel/PaymentLogModel.js';
import PaymentModel from '../models/PaymentModels/Payment.js';
import generateHash from '../utils/generateHash.js';

export const getPayments = async (filters = {}) => {
  const {
    type = DONATE_TYPE.REGULAR,
    clientEmail,
    donateValue,
    status,
  } = filters;

  const query = {
    type,
    ...(clientEmail && { clientEmail }),
    ...(status && { status: { $eq: status } }),
    ...(donateValue !== undefined && { donateValue }),
  };

  const payments = await PaymentModel.find(query);

  return payments;
};

export const getPaymentById = async (id) => {
  const payment = await PaymentModel.findOne({
    _id: id,
  });

  if (!payment) {
    throw createHttpError(404, 'Payment not found');
  }

  return payment;
};

export const createPayment = async ({
  amount,
  type,
  isPublic,
  clientFirstName,
  clientEmail,
  message,
  donateTitle,
  donateValue,
  status,
  serverUrl,
}) => {
  if (!amount || !type || !donateTitle || !donateValue) {
    const message = `Поля сума, тип донату(одноразово/щомісячно) та призначення донату є обов'язковими `;
    throw createHttpError(400, message);
  }

  if (type === DONATE_TYPE.REGULAR) {
    const existingPayments = await getPayments({
      type,
      clientEmail,
      donateValue,
      status: PAYMENT_STATUSES.APPROVED,
    });

    if (existingPayments.length > 0) {
      const paymentList = existingPayments
        .map((p) => `${p._id.toString()} (${p.donateTitle})`)
        .join(', ');

      throw createHttpError(
        409,
        `Ви вже маєте регулярні платежі: ${paymentList}`
      );
    }
  }

  const orderDate = Math.floor(Date.now() / 1000);
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

  const controlString = [
    merchantAccount,
    merchantDomainName,
    orderReference,
    orderDate,
    amount,
    currency,
    donateTitle,
    productCount,
    amount,
  ].join(';');

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

  return data;
};

export const updatePaymentStatus = async (data) => {
  const { orderReference, transactionStatus, cancellationReason } = data;

  if (!orderReference || !transactionStatus) {
    throw createHttpError(400, 'orderId or new status not found');
  }

  if (!Types.ObjectId.isValid(orderReference)) {
    throw createHttpError(400, 'Invalid orderId');
  }

  const updateFields = { status: transactionStatus };

  if (cancellationReason) {
    updateFields.cancellationReason = cancellationReason;
  }

  const updatedPayment = await PaymentModel.findOneAndUpdate(
    { _id: orderReference },
    updateFields,
    { new: true }
  );

  return updatedPayment;
};

export const checkRegularPaymentStatus = async ({ orderReference }) => {
  if (!orderReference) {
    throw createHttpError(400, 'Missing orderReference');
  }

  const requestBody = {
    requestType: PAYMENT_CONFIG.requestType.STATUS,
    merchantAccount: PAYMENT_CONFIG.merchantAccount,
    merchantPassword: PAYMENT_CONFIG.merchantPassword,
    orderReference,
  };

  const response = await fetch(PAYMENT_CONFIG.regularPaymentUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    throw createHttpError(
      response.status,
      `Failed to check regular payment status. Status: ${response.status} (${response?.statusText}). `
    );
  }

  const responseData = await response.json();

  return responseData;
};

export const cancelRegularPayment = async ({
  orderReference,
  cancellationReason,
}) => {
  if (!orderReference) {
    throw createHttpError(400, 'Missing orderReference');
  }

  const [payment, paymentRegular] = await Promise.all([
    checkPaymentStatus({ orderReference }),
    checkRegularPaymentStatus({ orderReference }),
  ]);

  if (!payment || !paymentRegular) {
    throw createHttpError(404, 'Payment not found');
  }

  const validPaymentStatuses = new Set([
    PAYMENT_STATUSES.APPROVED,
    PAYMENT_STATUSES.REFUNDED,
  ]);

  if (
    payment.reasonCode !== 1100 &&
    !validPaymentStatuses.has(payment.status)
  ) {
    throw createHttpError(404, 'Order Not Found');
  }

  if (
    paymentRegular.reasonCode !== 4100 ||
    paymentRegular.status !== PAYMENT_STATUSES.ACTIVE
  ) {
    throw createHttpError(404, 'Regular Order Not Found');
  }

  const requestBody = {
    requestType: PAYMENT_CONFIG.requestType.REMOVE,
    merchantAccount: PAYMENT_CONFIG.merchantAccount,
    merchantPassword: PAYMENT_CONFIG.merchantPassword,
    orderReference,
  };

  const response = await fetch(PAYMENT_CONFIG.regularPaymentUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    throw createHttpError(
      response.status,
      `Failed to cancel regular payment. Status: ${response.status} (${response?.statusText}). `
    );
  }

  const responseData = await response.json();

  if (responseData.reasonCode !== 4100) {
    throw createHttpError(400, `WayForPay Error: ${responseData.reason}`);
  }

  const updatedPayment = await updatePaymentStatus({
    orderReference,
    transactionStatus: PAYMENT_STATUSES.REMOVED,
    cancellationReason: cancellationReason || 'Regular payment is closed',
  });

  return updatedPayment;
};

export const checkPaymentStatus = async ({ orderReference }) => {
  const merchantAccount = PAYMENT_CONFIG.merchantAccount;

  const controlString = [merchantAccount, orderReference].join(';');
  const merchantSignature = generateHash(controlString, PAYMENT_CONFIG.key);

  const requestBody = {
    transactionType: PAYMENT_CONFIG.transactionType.CHECK_STATUS,
    merchantAccount,
    orderReference,
    merchantSignature,
    apiVersion: PAYMENT_CONFIG.apiVersion,
  };

  const response = await fetch(PAYMENT_CONFIG.paymentStatusURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    throw createHttpError(
      response.status,
      `Failed to cancel regular payment. Status: ${response.status} (${response?.statusText}). `
    );
  }

  const statusData = response.json();
  return statusData;
};

export const createPaymentLog = async (data) => {
  const { key } = PAYMENT_CONFIG;
  const status = 'accept';
  const time = Math.floor(Date.now() / 1000);
  const { orderReference } = data;

  if (!orderReference) {
    throw createHttpError(400, 'Missing orderReference');
  }

  await new PaymentLogModel(data).save();

  return {
    orderReference,
    status,
    time,
    signature: generateHash(`${orderReference};${status};${time}`, key),
  };
};
