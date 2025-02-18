'use client';
import { Button, Input } from '@/shared/components/index.js';
import clsx from 'clsx';
import { useFormik } from 'formik';
import Link from 'next/link.js';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import * as Yup from 'yup';
import { ROUTES } from '@/shared/constants';
import s from './SupportForm.module.scss';

const SupportForm = ({ data, className = '' }) => {
  const router = useRouter();
  const locale = usePathname().split('/')[1];
  const sectionClasses = clsx(s.sectionClass, className);

  const validationSchema = useMemo(
    () =>
      Yup.object({
        amount: Yup.number()
          .positive('Сума повинна бути більше 0')
          .required('Вкажіть суму'),
      }),
    []
  );

  const formik = useFormik({
    initialValues: {
      constantPrice: '',
      amount: '',
    },
    validationSchema,
    onSubmit: ({ amount }) => {
      router.push(
        `/${locale}/payments/step/2?${new URLSearchParams({ amount })}`
      );
      formik.resetForm();
    },
  });

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
  } = formik;

  const handleRadioChange = useCallback(
    (e) => {
      const price = e.target.value;
      setValues({ constantPrice: price, amount: price });
    },
    [setValues]
  );

  return (
    <section className={sectionClasses}>
      <h3 className={s.title}>{data.title}</h3>

      <form className={s.form} onSubmit={handleSubmit}>
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
              onChange={handleRadioChange}
              checked={values.constantPrice === price.toString()}
            />
          ))}
          {touched.constantPrice && errors.constantPrice && (
            <div className={s.error}>{errors.constantPrice}</div>
          )}
        </fieldset>

        <Input
          className={s.input}
          type="number"
          name="amount"
          value={values.amount}
          currency={data.currency}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={0}
          error={touched.amount && errors.amount}
        />

        <Button type="submit" variant="primary" className={s.btnSubmit}>
          {data.submitBtnText}
        </Button>

        <Link className={s.link} href={`/${ROUTES.PAYMENTS(0)}`}>
          {data.otherPaymentsLinkText}
        </Link>
      </form>
    </section>
  );
};

export default SupportForm;
