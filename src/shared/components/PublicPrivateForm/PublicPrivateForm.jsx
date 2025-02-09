'use client';

import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Dropdown,
  Input,
  InputArea,
  RadioButton,
  SectionTitle,
} from '..';
import s from './PublicPrivateForm.module.scss';
import data from './data/PublicPrivateForm.json';
import Link from 'next/link';

const PublicPrivateForm = ({ handleSubmitPublicPrivateForm }) => {
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

  return (
    <div className={s.container}>
      <SectionTitle className={s.title} title={data.title} />
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
          dropdown: '',
          isChecked: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          // eslint-disable-next-line
          console.log('Form public_private:', values);

          resetForm();
          handleSubmitPublicPrivateForm();
        }}
      >
        {({ values, setFieldValue }) => (
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
              <Field
                type="checkbox"
                name="isChecked"
                className={s.checkbox}
                checked={values.isChecked}
              />
              <p>{data.coverCommission}</p>
            </div>
            <Button type="submit">{data.btnText}</Button>
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
