const WFPForm = ({
  regular = false,
  amount = 0,
  clientFirstName,
  clientLastName,
  clientEmail,
}) => {
  const orderId = '1qwertdasdf';

  const key = 'fa61cf37bab976ebadbb7e8b8715efd07bae6552';
  const merchant = 'inharmony_com_ua';
  const merchantDomain = 'inharmony.com.ua';

  const description = 'Donate Inharmony';
  const qnt = 1;
  const currency = 'UAH';
  const ts = Math.floor(Date.now() / 1000);
  const controlString = `${merchant};${merchantDomain};${orderId};${ts};${amount};${currency};${description};${qnt};${amount}`;

  const hash = generateHash(controlString, key);

  const getNextMonthDateFormatted = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);

    return date.toLocaleDateString('uk-UA', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <form
      method="post"
      action="https://secure.wayforpay.com/pay"
      acceptCharset="utf-8"
    >
      <input type="hidden" name="clientFirstName" value={clientFirstName} />
      <input type="hidden" name="clientLastName" value={clientLastName} />
      <input type="hidden" name="clientEmail" value={clientEmail} />
      <input type="hidden" name="amount" value={amount} />
      <input type="hidden" name="merchantAccount" value={merchant} />
      <input type="hidden" name="merchantAuthType" value="SimpleSignature" />
      <input type="hidden" name="merchantDomainName" value={merchantDomain} />
      <input type="hidden" name="merchantSignature" value={hash} />
      <input type="hidden" name="orderReference" value={orderId} />
      <input type="hidden" name="orderDate" value={ts} />
      <input type="hidden" name="currency" value={currency} />
      <input type="hidden" name="productName[]" value={description} />
      <input type="hidden" name="productPrice[]" value={amount} />
      <input type="hidden" name="productCount[]" value={qnt} />
      <input
        type="hidden"
        name="returnUrl"
        value="http://localhost:3000/uk/collection/active/1"
      />
      {regular === true && (
        <>
          <input type="hidden" name="regularBehavior" value="preset" />
          <input type="hidden" name="regularMode" value="monthly" />
          <input type="hidden" name="regularAmount" value={amount} />
          <input type="hidden" name="regularOn" value="1" />
          <input
            type="hidden"
            name="dateNext"
            value={getNextMonthDateFormatted()}
          />
          <input type="hidden" name="regularCount" value="12" />
        </>
      )}
    </form>
  );
};

export default WFPForm;
