'use client';
import { Button, Input } from '@/shared/components/index.js';
import WFPForm from '@/shared/components/WFPForm/WFPForm.jsx';
import clsx from 'clsx';
import Link from 'next/link.js';
import { useRef, useState } from 'react';
import s from './SupportForm.module.scss';

const SupportForm = ({ data, className = '' }) => {
  const [amount, setAmount] = useState(0);
  const sectionClasses = clsx(s.sectionClass, className && className);
  const [loading, setLoading] = useState(false);
  const wfpFormRef = useRef(null);

  const handleChangePrice = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (wfpFormRef.current) {
      setLoading(true);
      await wfpFormRef.current.generateOrderAndSubmit();
      setLoading(false);
    }
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
          name="amount"
          value={amount}
          placeholder="0"
          currency={data.currency}
          onChange={handleChangePrice}
        />

        <Button type="submit" onClick={handleSubmit}>
          {loading ? 'Обробка...' : data.submitBtnText}
        </Button>

        <Link className={s.link} href="/payment">
          {data.otherPaymentsLinkText}
        </Link>
      </form>

      <WFPForm ref={wfpFormRef} amount={amount} />
    </section>
  );
};

export default SupportForm;
