'use client';

import { Field, Form, Formik } from 'formik';
import { Button, Container, RadioButton } from '../index.js';

import s from './FormWithSumButtons.module.scss';

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
            onSubmit={onSubmit}
          >
            {({ setFieldValue }) => (
              <Form className={s.form}>
                <Field name="donateTime">
                  {({ field }) => (
                    <RadioButton
                      options={[
                        { value: 'oneTime', label: 'Одноразово' },
                        { value: 'monthly', label: 'Щомісячно' },
                      ]}
                      name="donateTime"
                      onChange={(value) => setFieldValue(field.name, value)}
                    />
                  )}
                </Field>
                <div className={s.textForm}>
                  <p>Регулярна допомога рятує більше життів!</p>
                  <div className={s.arrowTest}></div>
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
                    type="string"
                    id="amount"
                    name="amount"
                    placeholder="0"
                    className={s.inputDonate}
                  />
                  <span className={s.spanInput}>UAH</span>
                </div>
                <Button type="submit" variant="primary" className={s.btnSubmit}>
                  До сплати
                </Button>
              </Form>
            )}
          </Formik>
          <div className={s.boxLink}>
            <a href="#">Інші способи оплати</a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default FormWithSumButtons;
