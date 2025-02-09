import crypto from 'crypto';
export async function POST(req) {
  try {
    const { amount, regular } = await req.json();

    const orderId = 1;

    const key = 'fa61cf37bab976ebadbb7e8b8715efd07bae6552'; // Беремо ключ з .env.local
    const merchant = 'inharmony_com_ua';
    const merchantDomain = 'inharmony.com.ua';

    const description = 'Donate Inharmony';
    const qnt = 1;
    const currency = 'USD';
    const ts = Math.floor(Date.now() / 1000);
    const controlString = `${merchant};${merchantDomain};${orderId};${ts};${amount};${currency};${description};${qnt};${amount}`;

    const hash = crypto
      .createHmac('md5', key)
      .update(controlString)
      .digest('hex');

    const body = {
      merchantAccount: merchant,
      merchantAuthType: 'SimpleSignature',
      merchantDomainName: merchantDomain,
      merchantSignature: hash,
      orderReference: orderId,
      orderDate: ts,
      amount,
      currency,
      productName[]: [description],
      productPrice[]: [amount],
      productCount[]: [qnt],
    };

    const response = await fetch('https://secure.wayforpay.com/pay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    // if (!response.ok) {
    //   const errorText = await response.text();
    //   throw new Error(
    //     `Request failed with status ${response.status}: ${errorText}`
    //   );
    // }
    console.log('response: ', response.text());

    // const result = await response.json();
    // console.log('>>>>>result: ', result);
    // return Response.json(result, { status: 200 });

    return Response.json({ ...body }, { status: 200 });
    // res.status(200).json({ amount, regular });
    // const validateAmount = (amount) => amount && !isNaN(amount) && amount > 0;
    // if (!validateAmount(amount)) {
    //   return Response.json({ error: 'Invalid amount' }, { status: 400 });
    // }

    // const orderId = 1;

    // const generateTimestamp = () => Math.floor(Date.now() / 1000);

    // const key = 'fa61cf37bab976ebadbb7e8b8715efd07bae6552'; // Беремо ключ з .env.local
    // const merchant = 'inharmony_com_ua';
    // const merchantDomain = 'inharmony.com.ua';

    // const description = 'Donate Inharmony';
    // const qnt = 1;
    // const currency = 'USD';
    // const ts = generateTimestamp();
    // const controlString = `${merchant};${merchantDomain};${orderId};${ts};${amount};${currency};${description};${qnt};${amount}`;

    // const hash = crypto
    //   .createHmac('md5', key)
    //   .update(controlString)
    //   .digest('hex');
    // // const hash = generateHash(controlString, key);

    // const getNextMonthDateFormatted = () => {
    //   const date = new Date();
    //   date.setMonth(date.getMonth() + 1);
    //   const day = ('0' + date.getDate()).slice(-2);
    //   const month = ('0' + (date.getMonth() + 1)).slice(-2);
    //   const year = date.getFullYear();
    //   return `${day}.${month}.${year}`;
    // };

    // const createPaymentBody = ({
    //   merchant,
    //   merchantDomain,
    //   hash,
    //   orderId,
    //   ts,
    //   amount,
    //   currency,
    //   description,
    //   qnt,
    //   regular = false,
    // }) => {
    //   const body = {
    //     merchantAccount: merchant,
    //     merchantAuthType: 'SimpleSignature',
    //     merchantDomainName: merchantDomain,
    //     merchantSignature: hash,
    //     orderReference: orderId,
    //     orderDate: ts,
    //     amount,
    //     currency,
    //     productName: [description],
    //     productPrice: [amount],
    //     productCount: [qnt],
    //   };

    //   if (regular) {
    //     body.regularBehavior = 'preset';
    //     body.regularMode = 'monthly';
    //     body.regularAmount = amount;
    //     body.regularOn = 1;
    //     body.dateNext = getNextMonthDateFormatted();
    //     body.regularCount = 12;
    //   }

    //   return body;
    // };

    // const paymentBody = createPaymentBody(
    //   merchant,
    //   merchantDomain,
    //   hash,
    //   orderId,
    //   ts,
    //   amount,
    //   currency,
    //   description,
    //   qnt,
    //   regular
    // );
    // console.log('paymentBody: ', paymentBody);

    // const response = await fetch('https://secure.wayforpay.com/pay', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(paymentBody),
    // });

    // if (!response.ok) {
    //   const errorText = await response.text();
    //   throw new Error(
    //     `Request failed with status ${response.status}: ${errorText}`
    //   );
    // }

    // const result = await response.json();
    // console.log('>>>>>result: ', result);
    // return Response.json(result, { status: 200 });
  } catch (error) {
    console.error('Payment error:', error);
    return Response.json({ error: 'Payment request failed' }, { status: 500 });
  }
}
