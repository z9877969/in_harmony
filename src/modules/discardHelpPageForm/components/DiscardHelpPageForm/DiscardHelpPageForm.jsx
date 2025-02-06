'use client';

import { useFormik } from 'formik';
import * as yup from 'yup';
import clsx from 'clsx';
import {
  Button,
  Container,
  Input,
  InputArea,
} from '@/shared/components';
import data from '../../data/sectionContent.json';

import s from './DiscardHelpPageForm.module.scss';

const validationSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup
    .string()
    .email()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email must contain '@' and '.'")
    .required('Email is required'),
  amount: yup.number().positive().required(),
  date: yup.string().required(),
  cardLastDigits: yup.number().positive().required(),
  reason: yup.string(),
});

const DiscardHelpPageForm = () => {
  const initialValues = {
    name: '',
    email: '',
    amount: '',
    date: '',
    cardLastDigits: '',
    reason: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // eslint-disable-next-line
      console.log('Form discard_help:', values);
      formik.resetForm();
    },
  });

  const { handleChange, handleBlur, handleSubmit, values, touched, errors } =
    formik;

  return (
    <section className={s.section}>
      <Container>
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.boxForm}>
            <Input
              className={s.inputDiscardForm}
              label={data.nameLabel}
              name="name"
              type="text"
              placeholder={data.namePlaceholder}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && errors.name}
            />

            <Input
              className={s.inputDiscardForm}
              label={data.emailLabel}
              name="email"
              type="text"
              placeholder={data.emailPlaceholder}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && errors.email}
            />
            <div className={s.boxInput}>
              <Input
                className={clsx(s.inputDiscardForm, s.boxInput)}
                label={data.amountLabel}
                name="amount"
                type="text"
                placeholder={data.amountPlaceholder}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.amount && errors.amount}
              />
              <span className={s.spanInput}>UAH</span>
            </div>

            <Input
              className={s.inputDiscardForm}
              label={data.dateLabel}
              name="date"
              type="text"
              placeholder={data.datePlaceholder}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.date && errors.date}
            />

            <Input
              className={s.inputDiscardForm}
              label={data.cardLastDigitsLabel}
              name="cardLastDigits"
              type="text"
              placeholder={data.cardLastDigitsPlaceholder}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.cardLastDigits && errors.cardLastDigits}
            />

            <InputArea
              className={s.textAreaDiscardForm}
              label={data.reasonLabel}
              name="reason"
              value={values.reason}
              placeholder={data.reasonPlaceholder}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.reason && errors.reason}
            />
          </div>
          <Button colors="primary" size="extraLarge" type="submit">
            {data.submitButton}
          </Button>
        </form>
      </Container>
    </section>
  );
};

export default DiscardHelpPageForm;
