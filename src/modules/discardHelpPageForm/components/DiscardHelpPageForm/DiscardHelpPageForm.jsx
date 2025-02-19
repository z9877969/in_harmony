'use client';

import { useFormik } from 'formik';

import { Button, Container, Input, InputArea } from '@/shared/components';

import s from './DiscardHelpPageForm.module.scss';
import { validationSchema } from '../validation/validationSchema';
import { useTranslation } from 'react-i18next';

const DiscardHelpPageForm = () => {
  const initialValues = {
    name: '',
    email: '',
    amount: '',
    date: '',
    cardLastDigits: '',
    reason: '',
  };

  const { t } = useTranslation('forms');

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema(t),
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
              label={t('paymentDiscard.nameLabel')}
              name="name"
              type="text"
              value={values.name}
              placeholder={t('paymentDiscard.namePlaceholder')}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && errors.name}
            />

            <Input
              className={s.inputDiscardForm}
              label={t('paymentDiscard.emailLabel')}
              name="email"
              type="text"
              value={values.email}
              placeholder={t('paymentDiscard.emailPlaceholder')}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && errors.email}
            />

            <Input
              className={s.inputDiscardForm}
              label={t('paymentDiscard.amountLabel')}
              name="amount"
              type="text"
              value={values.amount}
              placeholder={t('paymentDiscard.amountPlaceholder')}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.amount && errors.amount}
              currency="UAH"
            />

            <Input
              className={s.inputDiscardForm}
              label={t('paymentDiscard.dateLabel')}
              name="date"
              type="text"
              value={values.date}
              placeholder={t('paymentDiscard.datePlaceholder')}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.date && errors.date}
            />

            <Input
              className={s.inputDiscardForm}
              label={t('paymentDiscard.cardLastDigitsLabel')}
              name="cardLastDigits"
              type="text"
              value={values.cardLastDigits}
              placeholder={t('paymentDiscard.cardLastDigitsPlaceholder')}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.cardLastDigits && errors.cardLastDigits}
            />

            <InputArea
              className={s.textAreaDiscardForm}
              label={t('paymentDiscard.reasonLabel')}
              name="reason"
              value={values.reason}
              placeholder={t('paymentDiscard.reasonPlaceholder')}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.reason && errors.reason}
            />
          </div>
          <Button colors="primary" size="extraLarge" type="submit">
            {t('paymentDiscard.submitButton')}
          </Button>
        </form>
      </Container>
    </section>
  );
};

export default DiscardHelpPageForm;
