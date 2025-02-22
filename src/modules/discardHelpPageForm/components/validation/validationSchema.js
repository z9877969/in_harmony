import * as Yup from 'yup';

export const validationSchema = (t) =>
  Yup.object().shape({
    name: Yup.string().min(3).required(t('paymentDiscard.nameRequired')),
    email: Yup.string()
      .email(t('paymentDiscard.emailInvalid'))
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, t('paymentDiscard.emailInvalid'))
      .required(t('paymentDiscard.emailRequired')),
    amount: Yup.number(t('paymentDiscard.numberRequired'))
      .positive(t('paymentDiscard.positiveRequired'))
      .required(t('paymentDiscard.amountRequired')),
    date: Yup.string().required(t('paymentDiscard.dateRequired')),
    cardLastDigits: Yup.number(t('paymentDiscard.numberRequired'))
      .positive(t('paymentDiscard.positiveRequired'))
      .required(t('paymentDiscard.cardLastDigitsRequired')),
    reason: Yup.string(),
  });
