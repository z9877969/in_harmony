import { DONATE_TYPE, PAYMENT_STATUSES } from '@/shared/constants';

const generateQueryParams = (params) => {
  const encodedParams = Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join('&');
  return encodedParams ? `${encodedParams}` : '';
};

export default async function POST(req, res) {
  const {
    amount = 0,
    isRegular = false,
    isPublic = false,
    clientFirstName = '',
    clientEmail = '',
    message = '',
    donateTitle = 'inHarmony Donate',
    donateValue = 'inHarmony Donate',
    locale,
  } = await req.body;

  const getPaymentData = async ({
    amount,
    isRegular,
    isPublic,
    clientFirstName,
    clientEmail,
    message,
    donateTitle,
    donateValue,
  }) => {
    const host = req.headers.host; // Наприклад: 'localhost:3000' або 'mydomain.com'
    const protocol = req.headers['x-forwarded-proto'] || 'http'; // або 'https' на проді

    const baseUrl = `${protocol}://${host}`;

    const response = await fetch(baseUrl + '/api/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount,
        type: isRegular ? DONATE_TYPE.REGULAR : DONATE_TYPE.ONE_TIME,
        isPublic,
        clientFirstName: isPublic ? clientFirstName : '',
        clientEmail,
        message: isPublic ? message : '',
        donateTitle,
        donateValue,
        status: PAYMENT_STATUSES.IN_PROCESSING,
      }),
    });

    if (!response.ok) {
      const { message } = await response.json();

      throw new Error(message);
    }

    return await response.json();
  };

  const { data } = await getPaymentData({
    amount,
    isRegular,
    isPublic,
    clientFirstName,
    clientEmail,
    message,
    donateTitle,
    donateValue,
  });

  const getReturnUrl = () => {
    if (!data) return '';
    const baseUrl = `${data.appBaseURL}/api/redirect-to-thanks`;
    const params = { locale, orderId: data.orderReference };
    const queryParams = generateQueryParams(params);
    return `${baseUrl}?${queryParams}`;
  };

  const regularInputs = isRegular
    ? `
      <input type="hidden" name="regularBehavior" value="${data.regularBehavior}" />
      <input type="hidden" name="regularMode" value="${data.regularMode}" />
      <input type="hidden" name="regularAmount" value="${data.amount}" />
      <input type="hidden" name="regularOn" value="${data.regularOn}" />
      <input type="hidden" name="regularCount" value="${data.regularCount}" />
    `
    : '';

  const publicInputs = isPublic
    ? `
      <input type="hidden" name="clientFirstName" value="${clientFirstName}" />
      <input type="hidden" name="clientEmail" value="${clientEmail}" />
    `
    : '';

  const html = `
    <form id="payment" method="post" action="${data.paymentUrl}" accept-charset="utf-8">
      <input type="hidden" name="merchantAccount" value="${data.merchantAccount}" /> 
      <input type="hidden" name="merchantAuthType" value="${data.merchantAuthType}" />
      <input type="hidden" name="merchantDomainName" value="${data.merchantDomainName}" />
      <input type="hidden" name="merchantSignature" value="${data.merchantSignature}" />
      <input type="hidden" name="orderReference" value="${data.orderReference}" />
      <input type="hidden" name="orderDate" value="${data.orderDate}" />
      <input type="hidden" name="amount" value="${data.amount}" />
      <input type="hidden" name="currency" value="${data.currency}" />
      <input type="hidden" name="productName[]" value="${data.donateTitle}" />
      <input type="hidden" name="productPrice[]" value="${data.amount}" />
      <input type="hidden" name="productCount[]" value="${data.productCount}" />
      <input type="hidden" name="defaultPaymentSystem" value="${data.defaultPaymentSystem}" />
      <input type="hidden" name="returnUrl" value="${getReturnUrl()}" />
      <input type="hidden" name="serviceUrl" value="${data.appBaseURL}/api/payment/log" />
      <input type="hidden" name="language" value="${data.language}" />
      <input type="hidden" name="orderTimeout" value="${data.orderTimeout}" />
      ${regularInputs}
      ${publicInputs}
    </form>
    <script>document.getElementById('payment').submit();</script>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
