'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation.js';
import { ROUTES } from '@/shared/constants';

import {
  Button,
  Dropdown,
  Input,
  InputArea,
  RadioButton,
  WFPForm,
} from '../index.js';

import {
  validationSchemaAnonymous,
  validationSchemaPublic,
} from './validation/validationSchema.js';

import s from './PublicPrivateForm.module.scss';

const PublicPrivateForm = ({ content }) => {
  const collections = content.cards;
  const locale = usePathname().split('/')[1];

  const initialFormValues = {
    name: '',
    email: '',
    message: '',
    dropdown: '',
    isChecked: false,
    amount: '',
    donateTime: '',
    isPublic: true,
    value: '',
  };

  const [initialValues, setInitialValues] = useState(initialFormValues);
  const { t } = useTranslation('forms');

  const [loading, setLoading] = useState(false);

  const wfpFormRef = useRef(null);

  const title = t('paymentInfo.title');
  const index = title.indexOf('–');
  const title1 = title.slice(0, index + 1);
  const title2 = title.slice(index + 1);

  let validationSchema;

  if (initialValues.isPublic) {
    validationSchema = validationSchemaPublic(t);
  } else {
    validationSchema = validationSchemaAnonymous(t);
  }

  const handleRadioButtonChange = (value) => {
    setInitialValues((prevValues) => ({
      ...prevValues,
      isPublic: value === 'public',
    }));
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    const email = searchParams.get('email');

    setInitialValues((prevValues) => ({
      ...prevValues,
      email: email ? email : prevValues.email,
      amount: searchParams.get('amount'),
      donateTime: searchParams.get('donateTime'),
      dropdown: searchParams.get('value'),
      value: searchParams.get('value'),
    }));
  }, []);

  const handleFormSubmit = async (values) => {
    const selectedOption = collections.find(
      (option) => option.value === values.dropdown
    );
    const amountWithCommission = values.isChecked
      ? parseFloat(initialValues.amount) * 1.02
      : parseFloat(initialValues.amount);

    const valuesAll = {
      ...values,
      amount: amountWithCommission.toFixed(0),
      donateTime: initialValues.donateTime,
      dropdown: selectedOption ? selectedOption.title : values.dropdown,
      value: selectedOption ? selectedOption.value : initialValues.value,
    };
    setInitialValues(valuesAll);
  };

  const handleFinalSubmit = async () => {
    if (wfpFormRef.current) {
      setLoading(true);
      await wfpFormRef.current.generateOrderAndSubmit();
      setLoading(false);
    }
  };

  return (
    <div className={s.boxForm}>
      <h2 className={s.title} id="title">
        <span>{title1}</span>
        <br />
        <span>{title2}</span>
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          await handleFormSubmit(values);
          await handleFinalSubmit(actions);
          actions.setSubmitting(false);
          actions.resetForm({
            values: initialFormValues,
          });
        }}
        enableReinitialize
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <RadioButton
                options={t('paymentInfo.donateOptions', {
                  returnObjects: true,
                })}
                name="donateOptions"
                onChange={handleRadioButtonChange}
              />

              {initialValues.isPublic && (
                <div className={s.inputContainer}>
                  <Field
                    as={Input}
                    type="text"
                    placeholder={t('paymentInfo.placeholderName')}
                    name="name"
                    className={s.input}
                  />
                  <ErrorMessage name="name" component="p" className={s.error} />

                  <Field
                    as={Input}
                    type="email"
                    placeholder={t('paymentInfo.placeholderEmail')}
                    name="email"
                    className={s.input}
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className={s.error}
                  />

                  <Field
                    as={InputArea}
                    placeholder={t('paymentInfo.placeholderMessage')}
                    name="message"
                    style={{ padding: '16px' }}
                  />
                  <ErrorMessage
                    name="message"
                    component="p"
                    className={s.error}
                  />
                </div>
              )}
            </div>

            <p className={s.destination}>{t('paymentInfo.destination')}</p>
            <Field name="dropdown">
              {({ field }) => (
                <Dropdown
                  value={field.value}
                  onSelect={(selectedOption) =>
                    setFieldValue('dropdown', selectedOption.value)
                  }
                  initialValue={initialValues.dropdown}
                  collections={collections}
                />
              )}
            </Field>

            <ErrorMessage name="dropdown" component="p" className={s.error} />
            <div className={s.checkboxContainer}>
              <Field type="checkbox" name="isChecked" className={s.checkbox} />
              <p>{t('paymentInfo.coverCommission')}</p>
            </div>
            <Field as={Input} type="hidden" name="amount" />
            <Field as={Input} type="hidden" name="donateTime" />
            <Button
              type="submit"
              colors="secondary"
              size="medium"
              className={s.btn}
            >
              {!loading
                ? `${t('paymentInfo.btnText')}`
                : t('paymentInfo.loadingText')}
            </Button>
            <Link
              className={s.payment}
              href={`/${locale}/${ROUTES.PAYMENTS(0)}`}
            >
              {t('paymentAmount.otherPayment')}
            </Link>
          </Form>
        )}
      </Formik>

      <WFPForm
        ref={wfpFormRef}
        amount={initialValues.amount}
        clientEmail={initialValues.email}
        message={initialValues.message}
        donateValue={initialValues.value}
        donateTitle={initialValues.dropdown}
        isRegular={initialValues.donateTime === 'true'}
        clientFirstName={initialValues.name}
        isPublic={initialValues.isPublic}
      />
    </div>
  );
};
export default PublicPrivateForm;
