'use client';
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

  return (
    <section className={sectionClasses}>
      <h3 className={s.title}>{data.title}</h3>

      <form className={s.form}>
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
          name="manualPrice"
          value={amount}
          placeholder="0"
          currency={data.currency}
          onChange={handleChangePrice}
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
