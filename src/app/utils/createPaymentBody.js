import { getNextMonthDateFormatted } from './helpers/timeHelpers.js';

const createPaymentBody = ({
  merchant,
  merchantDomain,
  hash,
  orderId,
  ts,
  amount,
  currency,
  description,
  qnt,
  regular = false,
}) => {
  const body = {
    merchantAccount: merchant,
    merchantAuthType: 'SimpleSignature',
    merchantDomainName: merchantDomain,
    merchantSignature: hash,
    orderReference: orderId,
    orderDate: ts,
    amount,
    currency,
    productName: [description],
    productPrice: [amount],
    productCount: [qnt],
  };

  if (regular) {
    body.regularBehavior = 'preset';
    body.regularMode = 'monthly';
    body.regularAmount = amount;
    body.regularOn = 1;
    body.dateNext = getNextMonthDateFormatted();
    body.regularCount = 12;
  }

  return body;
};

export default createPaymentBody;
