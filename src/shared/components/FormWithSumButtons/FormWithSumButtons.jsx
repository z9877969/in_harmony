'use client';

import { useFormik } from 'formik';
import clsx from 'clsx';
import Link from 'next/link.js';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Input } from '@/shared/components';
import { usePathname, useRouter } from 'next/navigation.js';
import { ROUTES } from '@/shared/constants';
import { RadioButton } from '..';

import { arrowFormDonate as FormIcon } from '/public/icons';

import { validationSchema } from './validation/validationSchema';

import s from './FormWithSumButtons.module.scss';

const FormWithSumButtons = ({ className = '' }) => {
  const initialValues = {
    amount: '',
    donateTime: 'false',
    value: '',
  };

  const { t } = useTranslation('forms');
  const router = useRouter();
  const locale = usePathname().split('/')[1];
  const amounts = [200, 500, 1000];

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema(t),
    onSubmit: (values) => {
      const valuesAll = {
        ...values,
        value: initialValues.value || '',
      };
      const query = new URLSearchParams(valuesAll).toString();
      router.push(`/${locale}/${ROUTES.PAYMENTS(2)}?${query}`);
    },
  });

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    values,
    touched,
    errors,
  } = formik;

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    formik.setFieldValue('value', searchParams.get('value') || '');
  }, []);

  return (
    <div className={clsx(s.boxForm, `${className}`)}>
      <form className={s.form} onSubmit={handleSubmit}>
        <RadioButton
          options={t('paymentAmount.donateTimeOptions', {
            returnObjects: true,
          })}
          name="donateTime"
          onChange={(value) => setFieldValue('donateTime', value)}
        />

        <div className={s.textForm}>
          <p>{t('paymentAmount.text')}</p>
          <FormIcon className={s.iconForm} />
        </div>

        <div className={s.boxBtn}>
          {amounts.map((amount) => (
            <Button
              key={amount}
              type="button"
              variant="secondary"
              className={s.btnDonate}
              onClick={() => setFieldValue('amount', amount)}
            >
              +{amount} UAH
            </Button>
          ))}
        </div>

        <div className={s.boxInput}>
          <Input
            type="number"
            id="amount"
            name="amount"
            placeholder="0"
            className={s.inputDonate}
            value={values.amount}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.amount && errors.amount}
            currency="UAH"
          />
        </div>

        <Button type="submit" variant="primary" className={s.btnSubmit}>
          {t('paymentAmount.submitButton')}
        </Button>
      </form>

      <div className={s.boxLink}>
        <Link href={ROUTES.PAYMENTS(0)}>{t('paymentAmount.otherPayment')}</Link>
      </div>
    </div>
  );
};

export default FormWithSumButtons;
