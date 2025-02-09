import createPaymentBody from './createPaymentBody.js';
import generateHash from './generateHash.js';
import { generateTimestamp } from './helpers/timeHelpers.js';
import { validateAmount } from './helpers/validationHelpers.js';
import { getOrderId } from './orderService.js';

const payment = async (regular = false, amount = 0) => {
  if (validateAmount(amount)) {
    return 'Invalid amount';
  }

  //TODO Save to DB payments data and receive payment id/orderId
  const orderId = await getOrderId();

  const key = 'fa61cf37bab976ebadbb7e8b8715efd07bae6552';
  const merchant = 'inharmony_com_ua';
  const merchantDomain = 'inharmony.com.ua';

  const description = 'Donate Inharmony';
  const qnt = 1;
  const currency = 'USD';
  const ts = generateTimestamp();
  const controlString = `${merchant};${merchantDomain};${orderId};${ts};${amount};${currency};${description};${qnt};${amount}`;

  const hash = generateHash(controlString, key);

  const paymentBody = createPaymentBody(
    merchant,
    merchantDomain,
    hash,
    orderId,
    ts,
    amount,
    currency,
    description,
    qnt,
    regular
  );

  try {
    const response = await fetch('https://secure.wayforpay.com/pay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paymentBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const result = await response.json();

    // Повертаємо результат
    return result;
  } catch (error) {
    console.error('Payment error:', error);
    throw error;
  }
};

export default payment;
