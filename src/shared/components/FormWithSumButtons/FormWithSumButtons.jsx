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

import {
  validationSchemaAmount,
  validationSchemaAmountEmail,
} from './validation/validationSchema';

import s from './FormWithSumButtons.module.scss';

const initialValues = { amount: 0, donateTime: 'false', value: '', email: '' };

const validationSchema = (values, t) => {
  return values.donateTime === 'false'
    ? validationSchemaAmount(t)
    : validationSchemaAmountEmail(t);
};

const FormWithSumButtons = ({ className = '' }) => {
  const { t } = useTranslation('forms');
  const router = useRouter();
  const locale = usePathname().split('/')[1];
  const amounts = [200, 500, 1000];

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const query = new URLSearchParams(values).toString();
      router.push(`/${locale}/${ROUTES.PAYMENTS(2)}?${query}`);
    },
    validateOnChange: true,
    validateOnBlur: true,
    validate: (values) => {
      try {
        const schema = validationSchema(values, t);
        schema.validateSync(values, { abortEarly: false });
        return {};
      } catch (errors) {
        return errors.inner.reduce((acc, currentError) => {
          acc[currentError.path] = currentError.message;
          return acc;
        }, {});
      }
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
    const value = searchParams.get('value') || '';

    setFieldValue('value', value);
  }, [setFieldValue]);

  return (
    <div className={clsx(s.boxForm, `${className}`)}>
      <form className={s.form} onSubmit={handleSubmit}>
        <RadioButton
          options={t('paymentAmount.donateTimeOptions', {
            returnObjects: true,
          })}
          name="donateTime"
          onChange={(value) => setFieldValue('donateTime', value)}
          selctedOption={values.donateTime}
        />

        <div className={s.textForm}>
          <p>{t('paymentAmount.text')}</p>
          <FormIcon className={s.iconForm} />
        </div>

        <div className={s.boxBtn}>
          {amounts.map((amount) => (
            <label
              key={amount}
              type="button"
              variant="secondary"
              className={s.btnDonate}
            >
              +{amount} UAH
              <input
                type="radio"
                onChange={() => setFieldValue('amount', amount)}
                name="amount"
                value={amount}
                checked={amount.toString() === values.amount.toString()}
              />
            </label>
          ))}
        </div>

        <div className={s.boxInput}>
          <Input
            type="number"
            id="amount"
            name="amount"
            placeholder="0"
            className={s.inputDonate}
            value={Number(values.amount) > 0 ? values.amount : ''}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.amount && errors.amount}
            currency="UAH"
          />
        </div>

        {values.donateTime === 'true' && (
          <div className={s.boxInput}>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder={t('paymentAmount.placeholderEmail')}
              className={s.inputDonate}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && errors.email}
            />
          </div>
        )}

        <Button type="submit" variant="primary" className={s.btnSubmit}>
          {t('paymentAmount.submitButton')}
        </Button>
      </form>

      <div className={s.boxLink}>
        <Link href={`/${locale}/${ROUTES.PAYMENTS(0)}`}>
          {t('paymentAmount.otherPayment')}
        </Link>
      </div>
    </div>
  );
};

export default FormWithSumButtons;
