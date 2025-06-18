'use client';

import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation.js';
import { ROUTES, WFP_COMMISION } from '@/shared/constants';
import { Dropdown, Input, InputArea, RadioButton } from '../../../index.js';
import {
  validationSchemaAnonymous,
  validationSchemaPublic,
} from '../../validation/validationSchema.js';
import { collectionsOptions } from '../../options/collectionsOptions.js';
import s from './PublicPrivateForm.module.scss';
import DonateBtn from '../DonateBtn/DonateBtn.jsx';

const initialFormValues = {
  name: '',
  email: '',
  message: '',
  isChecked: false,
  isPublic: true,
  collection: {
    value: '',
    title: '',
  },
};

const calcCommisionAmount = ({ amount, isChecked }) => {
  return isChecked
    ? parseFloat(amount) * (1 + WFP_COMMISION / 100)
    : parseFloat(amount);
};

const PublicPrivateForm = ({ content }) => {
  const collections = content.cards;
  const searchParams = useSearchParams();
  const locale = usePathname().split('/')[1];
  const [initialValues, setInitialValues] = useState(initialFormValues);
  const { t } = useTranslation('forms');

  const prevFormData = useMemo(() => {
    const amount = searchParams.get('amount');
    const donateTime = searchParams.get('donateTime');
    return {
      amount,
      donateTime,
    };
  }, [searchParams]);

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

  const title = useMemo(() => {
    const title = t('paymentInfo.title');
    const index = title.indexOf('–');

    return {
      begin: title?.slice(0, index + 1) ?? '',
      end: title?.slice(index + 1) ?? '',
    };
  }, [t]);

  useEffect(() => {
    const email = searchParams.get('email');
    const collectionValue =
      searchParams.get('value') || dropdownOptions[0].value;

    setInitialValues((prevValues) => ({
      ...prevValues,
      email: email ? email : prevValues.email,
      collection: {
        value: collectionValue,
        title:
          dropdownOptions.find((el) => el.value === collectionValue)?.title ||
          '',
      },
    }));
  }, [dropdownOptions, searchParams]);

  return (
    <div className={s.boxForm}>
      <h2 className={s.title} id="title">
        <span>{title.begin}</span>
        <br />
        <span>{title.end}</span>
      </h2>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          try {
            const schema = values.isPublic
              ? validationSchemaPublic(t)
              : validationSchemaAnonymous(t);
            schema.validateSync(values, { abortEarly: false });
            return {};
          } catch (errors) {
            const validationErrors = {};
            errors.inner?.forEach((err) => {
              validationErrors[err.path] = err.message;
            });
            return validationErrors;
          }
        }}
        enableReinitialize
      >
        {({ values, setFieldValue }) => (
          <>
            <Form>
              <div>
                <RadioButton
                  options={t('paymentInfo.donateOptions', {
                    returnObjects: true,
                  })}
                  selctedOption={values.isPublic ? 'public' : 'anonymous'}
                  name="isPublic"
                  onChange={(value) => {
                    setFieldValue('isPublic', value === 'public');
                  }}
                />

                {values.isPublic && (
                  <div className={s.inputContainer}>
                    <div>
                      <Field
                        as={Input}
                        type="text"
                        placeholder={t('paymentInfo.placeholderName')}
                        name="name"
                        className={s.input}
                      />
                      <ErrorMessage
                        name="name"
                        component="p"
                        className={s.error}
                      />
                    </div>
                    <div>
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
                    </div>

                    <div>
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
                  </div>
                )}
              </div>

              <p className={s.destination}>{t('paymentInfo.destination')}</p>
              <Field name="collection">
                {({ field }) => {
                  return (
                    <Dropdown
                      option={field.value}
                      onSelect={(selectedOption) => {
                        setFieldValue('collection', selectedOption);
                      }}
                      collections={dropdownOptions}
                    />
                  );
                }}
              </Field>

              <ErrorMessage
                name="collection"
                component="p"
                className={s.error}
              />
              <div className={s.checkboxContainer}>
                <Field
                  type="checkbox"
                  name="isChecked"
                  className={s.checkbox}
                />
                <p>{t('paymentInfo.coverCommission')}</p>
              </div>
              <Field as={Input} type="hidden" name="amount" />
              <Field as={Input} type="hidden" name="donateTime" />
              <DonateBtn
                amount={calcCommisionAmount({
                  amount: prevFormData.amount,
                  isChecked: values.isChecked,
                })}
                clientEmail={values.email || prevFormData.email}
                clientFirstName={values.name}
                donateTitle={
                  values.collection.title.includes('"')
                    ? values.collection.title.replace(/"/g, "'")
                    : values.collection.title
                }
                donateValue={values.collection.value}
                isPublic={values.isPublic}
                isRegular={prevFormData.donateTime === 'true'}
                message={values.message}
                t={t}
                locale={locale}
              />
              <Link
                className={s.payment}
                href={`/${locale}/${ROUTES.PAYMENTS(0)}`}
              >
                {t('paymentAmount.otherPayment')}
              </Link>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};
export default PublicPrivateForm;
