import crypto from 'crypto';

export default async function POST(req, res) {
  const {
    amount = 0,
    isRegular = false,
    isPublic = false,
    clientFirstName = '',
    clientEmail = '',
    message = '',
    donateTitle = 'inHarmony Donate',
    // donateValue = 'inHarmony Donate',
  } = await req.body;

  const orderId = Date.now(); // або з БД
  const ts = Math.floor(Date.now() / 1000);

  const merchant = process.env.WAYFORPAY_MERCHANT_NAME;
  const merchantDomain = process.env.WAYFORPAY_MERCHANT_DOMAIN;
  const key = process.env.WAYFORPAY_KEY;
  const currency = 'UAH';
  const qnt = 1;

  const controlString = `${merchant};${merchantDomain};${orderId};${ts};${amount};${currency};${donateTitle};${qnt};${amount}`;
  const signature = crypto
    .createHmac('md5', key)
    .update(controlString)
    .digest('hex');

  const regularInputs = isRegular
    ? `
      <input type="hidden" name="regularBehavior" value="preset" />
      <input type="hidden" name="regularMode" value="monthly" />
      <input type="hidden" name="regularAmount" value="${amount}" />
      <input type="hidden" name="regularOn" value="1" />
      <input type="hidden" name="regularCount" value="12" />
    `
    : '';

  const publicInputs = isPublic
    ? `
      <input type="hidden" name="clientFirstName" value="${clientFirstName}" />
      <input type="hidden" name="clientEmail" value="${clientEmail}" />
      <input type="hidden" name="serviceUrl" value="${merchantDomain}/api/payment/log" />
      <input type="hidden" name="returnUrl" value="${merchantDomain}/api/redirect-to-thanks?orderId=${orderId}" />
      <input type="hidden" name="language" value="UA" />
      <input type="hidden" name="message" value="${message}" />
    `
    : '';

  const html = `
    <form id="payment" method="post" action="https://secure.wayforpay.com/pay" accept-charset="utf-8">
      <input type="hidden" name="merchantAccount" value="${merchant}" />
      <input type="hidden" name="merchantAuthType" value="SimpleSignature" />
      <input type="hidden" name="merchantDomainName" value="${merchantDomain}" />
      <input type="hidden" name="merchantSignature" value="${signature}" />
      <input type="hidden" name="orderReference" value="${orderId}" />
      <input type="hidden" name="orderDate" value="${ts}" />
      <input type="hidden" name="amount" value="${amount}" />
      <input type="hidden" name="currency" value="${currency}" />
      <input type="hidden" name="productName[]" value="${donateTitle}" />
      <input type="hidden" name="productPrice[]" value="${amount}" />
      <input type="hidden" name="productCount[]" value="${qnt}" />
      ${regularInputs}
      ${publicInputs}
    </form>
    <script>document.getElementById('payment').submit();</script>
  `;

  //   return new NextResponse(html, {
  //     headers: { 'Content-Type': 'text/html' },
  //   });
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
