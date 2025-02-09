import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../assets/constant';

const PaymentWidget = ({
  submitOrder,
  amount,
  productCount,
  orderId,
  signature,
}) => {
  const firstProductName = 'Товары';
  const secondProductName = 'Количество';
  const orderDate = '1415379863';
  const [orderReference] = useState(String(orderId));

  async function onSubmit(e) {
    e.preventDefault();

    const result = await submitOrder();
    console.log(result);
    if (!result) {
      alert('Произошла ошибка при оформлении заказа, попробуйте позже.');
      return;
    }

    var data = [
      'forsbrand_com_ua', // Merchant account
      'www.market.ua',
      result.id,
      orderDate,
      amount + productCount, // Amount
      'UAH', // Currency
      firstProductName,
      secondProductName,
      1,
      1,
      amount,
      productCount,
    ].join(';');
    console.log(data);

    const url = `${BASE_URL}/hmacmd5?string=${data}`;
    console.log('🚀 ~ generateSignature ~ url:', url);

    const res = (await axios.get(url)).data;
    const merchantSignature = res;
    debugger;

    const body = {
      merchantAccount: 'forsbrand_com_ua',
      merchantAuthType: 'SimpleSignature',
      merchantDomainName: 'www.market.ua',
      orderReference: res.id,
      orderDate: orderDate,
      amount: `${amount + productCount}`,
      currency: 'UAH',
      'productName[]': [firstProductName, secondProductName],
      'productPrice[]': [amount, productCount],
      serviceUrl: 'https://api.forsbrand.com.ua/order/payment',
      'productCount[]': [1, 1],
      defaultPaymentSystem: 'card',
      merchantSignature: merchantSignature,
    };

    fetch('https://secure.wayforpay.com/pay', {
      method: 'POST',
      body: JSON.stringify(body),
    })
      .then((e) => e.json())
      .catch((e) => console.error(e));
  }
  debugger;
  return (
    <>
      <form
        method="post"
        action="https://secure.wayforpay.com/pay"
        accept-charset="utf-8"
      >
        <input name="merchantAccount" value="forsbrand_com_ua" hidden />
        <input name="merchantAuthType" value="SimpleSignature" hidden />
        <input name="merchantDomainName" value="www.market.ua" hidden />
        <input name="orderReference" value={orderId} hidden />
        <input name="orderDate" value="1415379863" hidden />
        <input name="amount" value={amount} hidden />
        <input name="currency" value="UAH" hidden />
        <input name="productName[]" value="Товары" hidden />
        <input name="productName[]" value="Количество" hidden />
        <input name="productPrice[]" value={amount} hidden />
        <input name="productPrice[]" value={0} hidden />
        <input
          name="serviceUrl"
          value="https://api.forsbrand.com.ua/order/payment"
          hidden
        />
        <input name="productCount[]" value="1" hidden />
        <input name="productCount[]" value="1" hidden />
        <input name="defaultPaymentSystem" value="card" hidden />
        <input name="merchantSignature" value={signature} hidden />
        <input type="submit" value="Pay" className="buttonFondy" />
      </form>
    </>
  );
};

export default PaymentWidget;

//const handleAmountChange = (event) => {
// setAmount(event.target.value);
// };

// const handleCurrencyChange = (event) => {
//   setCurrency(event.target.value);
// };

// useEffect(() => {
//   const script = document.createElement("script");
//   script.src = "https://secure.wayforpay.com/server/pay-widget.js";
//   script.async = true;
//   document.body.appendChild(script);

//   script.onload = () => {
//     // eslint-disable-next-line no-undef
//     const wayforpay = new Wayforpay();
//     const generateWidgetData = () => {
//       const data = {
//         merchantDomainName: "https://forsbrand.com.ua",
//         merchantAccount: "forsbrand_com_ua", // Replace with your ID
//         amount: 1000 * 100, // Convert to pennies
//         currency: "UAH",
//         orderReference: makeid(10).toString(), // Generate a unique ID
//         productName: "Skin belt", // Required
//         clientFirstName: "Vasya", // Required
//         clientLastName: "Pupkin", // Required
//         clientPhone: "+38066345144", // Required
//         clientEmail: "customer@gmail.com",
//         // Add other optional parameters
//       };
//       data.merchantSignature = generateSignature(
//         "536f5050a274610e2aad9519c91227e4bbbac20c",
//         data
//       );
//       return data;
//     };

//     const pay = () => {
//       wayforpay.run(
//         generateWidgetData(),
//         function (response) {
//           // on approved
//           console.log(response);
//         },
//         function (response) {
//           // on declined
//           console.log(response);
//         },
//         function (response) {
//           // on pending or in processing
//           console.log(response);
//         }
//       );
//     };
//     window.pay = pay; // Expose pay function globally
//   };
// }, []);
