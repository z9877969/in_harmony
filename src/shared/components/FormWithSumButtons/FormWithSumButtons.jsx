'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

import { Button, Container, RadioButton } from '../index.js';

import { arrowFormDonate as FormIcon } from '/public/icons';

import data from './data/sectionContent.json';

import s from './FormWithSumButtons.module.scss';
import Link from 'next/link.js';

const validationSchemaFormDonate = yup.object().shape({
  donateTime: yup.string().required(),
  amount: yup.number().typeError().positive().required(),
});

const FormWithSumButtons = () => {
  const amounts = [200, 500, 1000];

  const onSubmit = (values, { resetForm }) => {
    console.log('Form donate:', values);
    resetForm();
  };
  return (
    <>
      <Container>
        <div className={s.boxForm}>
          <Formik
            initialValues={{
              amount: '',
              donateTime: 'oneTime',
            }}
            validationSchema={validationSchemaFormDonate}
            onSubmit={onSubmit}
          >
            {({ setFieldValue }) => (
              <Form className={s.form}>
                <Field name="donateTime">
                  {({ field }) => (
                    <RadioButton
                      options={data.donateTimeOptions}
                      name="donateTime"
                      onChange={(value) => setFieldValue(field.name, value)}
                    />
                  )}
                </Field>
                <div className={s.textForm}>
                  <p>{data.text}</p>
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
                  {data.submitButton}
                </Button>
              </Form>
            )}
          </Formik>
          <div className={s.boxLink}>
            <Link href="/payments">{data.otherPayment}</Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default FormWithSumButtons;
