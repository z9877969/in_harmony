'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Dropdown, Input, InputArea, RadioButton } from '..';
import s from './PublicPrivateForm.module.scss';
import data from './data/PublicPrivateForm.json';
import Link from 'next/link';

import { useState, useEffect } from 'react';

const PublicPrivateForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: '',
    email: '',
    message: '',
    dropdown: '',
    isChecked: false,
    amount: '',
    donateTime: '',
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    setInitialValues((prevValues) => ({
      ...prevValues,
      amount: searchParams.get('amount'),
      donateTime: searchParams.get('donateTime'),
    }));
  }, []);

  const [isPublic, setIsPublic] = useState(true);


  let validationSchema;

  if (isPublic) {
    validationSchema = Yup.object().shape({
      name: Yup.string().required(data.validationMessage.required),
      email: Yup.string()
        .email(data.validationMessage.email)
        .required(data.validationMessage.required),
      message: Yup.string().required(data.validationMessage.required),
      dropdown: Yup.string().required(data.validationMessage.dropdown),
      isChecked: Yup.boolean(),
    });
  } else {
    validationSchema = Yup.object().shape({
      dropdown: Yup.string().required(data.validationMessage.dropdown),
      isChecked: Yup.boolean(),
    });
  }

  const handleFormSubmit = (values, { resetForm }) => {
    const valuesAll = {
      ...values,
      amount: initialValues.amount,
      donateTime: initialValues.donateTime,
    };
    // eslint-disable-next-line
    console.log('valuesAll:', valuesAll);

    resetForm();
  };

  return (
    <div className={s.boxForm}>
      <h2 className={s.title} id="title">
        {data.title}
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <RadioButton
                options={data.donateOptions}
                name="donateOptions"
                onChange={() => setIsPublic((prev) => !prev)}
              />

              {isPublic && (
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
              {data.btnText}
            </Button>
            <Link href="#" className={s.payment}>
              {data.otherPaymentMethods}
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PublicPrivateForm;
