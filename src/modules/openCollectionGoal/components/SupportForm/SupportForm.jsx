'use client';
import generateHash from '@/app/utils/generateHash.js';
import { Button, Input } from '@/shared/components/index.js';
import clsx from 'clsx';
import Link from 'next/link.js';
import { useState } from 'react';
import s from './SupportForm.module.scss';

const SupportForm = ({ data, className = '' }) => {
  const [amount, setAmount] = useState(0);
  const sectionClasses = clsx(s.sectionClass, className && className);

  const handleChangePrice = (e) => {
    setAmount(e.target.value);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // };

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

  return (
    <section className={sectionClasses}>
      <h3 className={s.title}>{data.title}</h3>

      <form
        className={s.form}
        method="post"
        action="https://secure.wayforpay.com/pay"
        acceptCharset="utf-8"
      >
        <fieldset className={s.fieldset}>
          {data.radioPriceItems.map((price, index) => (
            <Input
              key={index}
              labelClass={s.inputRadioLabel}
              className={s.inputRadio}
              type="radio"
              value={price}
              name="constantPrice"
              label={`+${price} UAH`}
              onChange={handleChangePrice}
            />
          ))}
        </fieldset>
        <Input
          className={s.input}
          type="number"
          name="amount"
          value={amount}
          placeholder="0"
          currency={data.currency}
          onChange={handleChangePrice}
        />
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
        <Button type="submit">{data.submitBtnText}</Button>
        <Link className={s.link} href="/payment">
          {data.otherPaymentsLinkText}
        </Link>
      </form>
    </section>
  );
};

export default SupportForm;
