'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { usePathname, useRouter } from 'next/navigation.js';
import { useEffect, useState } from 'react';

import clsx from 'clsx';
import Link from 'next/link.js';

import { ROUTES } from '@/shared/constants';

import { Button, RadioButton } from '..';

import { arrowFormDonate as FormIcon } from '/public/icons';

import s from './FormWithSumButtons.module.scss';
import { useTranslation } from 'react-i18next';
import { validationSchema } from './validation/validationSchema';

const FormWithSumButtons = ({ className = '' }) => {
  const [initialValues, setInitialValues] = useState({
    amount: '',
    donateTime: 'false',
    value: '',
  });

  const { t } = useTranslation('forms');
  const router = useRouter();
  const locale = usePathname().split('/')[1];
  const amounts = [200, 500, 1000];

  const onSubmit = (values, { resetForm }) => {
    const valuesAll = {
      ...values,
      value: initialValues.value || '',
    };
    // eslint-disable-next-line
    console.log('Form donate:', valuesAll);
    resetForm();
    const query = new URLSearchParams(valuesAll).toString();
    router.push(`/${locale}/${ROUTES.PAYMENTS(2)}?${query}`);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    setInitialValues((prevValues) => ({
      ...prevValues,
      value: searchParams.get('value'),
    }));
  }, []);

  return (
    <div className={clsx(s.boxForm, `${className}`)}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema(t)}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <Form className={s.form}>
            <Field name="donateTime">
              {({ field }) => (
                <RadioButton
                  options={t('paymentAmount.donateTimeOptions', {
                    returnObjects: true,
                  })}
                  name="donateTime"
                  onChange={(value) => setFieldValue(field.name, value)}
                />
              )}
            </Field>
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
              <Field
                type="number"
                id="amount"
                name="amount"
                placeholder="0"
                className={s.inputDonate}
              />
              <span className={s.spanInput}>UAH</span>
              <ErrorMessage
                className={s.errorText}
                name="amount"
                component="span"
              />
            </div>

            <Button type="submit" variant="primary" className={s.btnSubmit}>
              {t('paymentAmount.submitButton')}
            </Button>
          </Form>
        )}
      </Formik>
      <div className={s.boxLink}>
        <Link href={ROUTES.PAYMENTS(0)}>{t('paymentAmount.otherPayment')}</Link>
      </div>
    </div>
  );
};

export default FormWithSumButtons;
