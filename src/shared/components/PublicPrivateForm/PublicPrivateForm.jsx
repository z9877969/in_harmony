'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';

import {
  Button,
  Dropdown,
  Input,
  InputArea,
  RadioButton,
  WFPForm,
} from '../index.js';

import data from './data/PublicPrivateForm.json';
import dropdownData from '../Dropdown/data/Dropdown.json';

import s from './PublicPrivateForm.module.scss';

import { useState, useEffect, useRef } from 'react';

const validationSchemaPublic = Yup.object().shape({
  name: Yup.string().required(data.validationMessage.required),
  email: Yup.string()
    .email(data.validationMessage.email)
    .required(data.validationMessage.required),
  message: Yup.string().required(data.validationMessage.required),
  dropdown: Yup.string().required(data.validationMessage.dropdown),
  isChecked: Yup.boolean(),
});

const validationSchemaAnonymous = Yup.object().shape({
  dropdown: Yup.string().required(data.validationMessage.dropdown),
  isChecked: Yup.boolean(),
});

const collections = dropdownData.dropdownOptions;

const PublicPrivateForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: '',
    email: '',
    message: '',
    dropdown: '',
    isChecked: false,
    amount: '',
    donateTime: '',
    isPublic: true,
  });
  // const [isPublic, setIsPublic] = useState(true);
  const [loading, setLoading] = useState(false);

  const wfpFormRef = useRef(null);

  let validationSchema;

  if (initialValues.isPublic) {
    validationSchema = validationSchemaPublic;
  } else {
    validationSchema = validationSchemaAnonymous;
  }

  const handleRadioButtonChange = (value) => {
    setInitialValues((prevValues) => ({
      ...prevValues,
      isPublic: value === 'public',
    }));
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    setInitialValues((prevValues) => ({
      ...prevValues,
      amount: searchParams.get('amount'),
      donateTime: searchParams.get('donateTime'),
      dropdown: searchParams.get('value'),
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
        {data.title}
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          await handleFormSubmit(values);
          await handleFinalSubmit();
          actions.setSubmitting(false);
        }}
        enableReinitialize
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <RadioButton
                options={data.donateOptions}
                name="donateOptions"
                onChange={handleRadioButtonChange}
              />

              {initialValues.isPublic && (
                <div className={s.inputContainer}>
                  <Field
                    as={Input}
                    type="text"
                    placeholder={data.placeholderName}
                    name="name"
                    className={s.input}
                  />
                  <ErrorMessage name="name" component="p" className={s.error} />

                  <Field
                    as={Input}
                    type="email"
                    placeholder={data.placeholderEmail}
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
                    placeholder={data.placeholderMessage}
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

            <p className={s.destination}>{data.destination}</p>
            <Field name="dropdown">
              {({ field }) => (
                <Dropdown
                  value={field.value}
                  onSelect={(value) => setFieldValue('dropdown', value)}
                  initialValue={initialValues.dropdown}
                />
              )}
            </Field>
            <ErrorMessage name="dropdown" component="p" className={s.error} />
            <div className={s.checkboxContainer}>
              <Field type="checkbox" name="isChecked" className={s.checkbox} />
              <p>{data.coverCommission}</p>
            </div>
            <Field as={Input} type="hidden" name="amount" />
            <Field as={Input} type="hidden" name="donateTime" />
            <Button
              type="submit"
              colors="secondary"
              size="medium"
              className={s.btn}
            >
              {!loading ? `${data.btnText}` : 'обробка запиту'}
            </Button>
            <Link href="#" className={s.payment}>
              {data.otherPaymentMethods}
            </Link>
          </Form>
        )}
      </Formik>

      <WFPForm
        ref={wfpFormRef}
        amount={initialValues.amount}
        clientEmail={initialValues.email}
        message={initialValues.message}
        paymentPurpose={initialValues.dropdown}
        isRegular={initialValues.donateTime}
        clientFirstName={initialValues.name}
        isPublic={initialValues.isPublic}
      />
    </div>
  );
};
export default PublicPrivateForm;
