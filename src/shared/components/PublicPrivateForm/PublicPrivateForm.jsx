'use client';

import { ROUTES } from '@/shared/constants';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { usePathname } from 'next/navigation.js';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
import { collectionsOptions } from './options/collectionsOptions.js';
import s from './PublicPrivateForm.module.scss';

const initialFormValues = {
  name: '',
  email: '',
  message: '',
  isChecked: false,
  amount: '',
  donateTime: '',
  isPublic: true,
  collection: {
    value: '',
    title: '',
  },
};

const PublicPrivateForm = ({ content }) => {
  const collections = content.cards;
  const locale = usePathname().split('/')[1];
  const [initialValues, setInitialValues] = useState(initialFormValues);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation('forms');

  const wfpFormRef = useRef(null);

  const dropdownOptions = useMemo(() => {
    const options = collections.map(({ value, title }) => ({
      value,
      title,
    }));
    return [
      {
        value: collectionsOptions.collectFund.value,
        title: t('paymentInfo.dropdown'),
      },
      ...options,
    ];
  }, [collections, t]);

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
    const collectionValue =
      searchParams.get('value') || dropdownOptions[0].value;
    const amount = searchParams.get('amount');
    const donateTime = searchParams.get('donateTime');

    setInitialValues((prevValues) => ({
      ...prevValues,
      email: email ? email : prevValues.email,
      amount,
      donateTime,
      collection: {
        value: collectionValue,
        title:
          dropdownOptions.find((el) => el.value === collectionValue)?.title ||
          '',
      },
    }));
  }, [dropdownOptions]);

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
                selctedOption={initialValues.isPublic ? 'public' : 'anonymous'}
                name="isPublic"
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
            <Field name="collection">
              {({ field }) => {
                return (
                  <Dropdown
                    option={field.value}
                    onSelect={(selectedOption) =>
                      setFieldValue('collection', selectedOption)
                    }
                    collections={dropdownOptions}
                  />
                );
              }}
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
            <WFPForm
              ref={wfpFormRef}
              amount={initialValues.amount}
              clientEmail={initialValues.email}
              message={initialValues.message}
              donateValue={initialValues.collection.value}
              donateTitle={initialValues.collection.title}
              isRegular={initialValues.donateTime === 'true'}
              clientFirstName={initialValues.name}
              isPublic={initialValues.isPublic}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default PublicPrivateForm;
