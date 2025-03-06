import * as Yup from 'yup';

export const validationSchema = (t) =>
  Yup.object().shape({
    email: Yup.string()
      .email(t('paymentDiscard.emailInvalid'))
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, t('paymentDiscard.emailInvalid'))
      .required(t('paymentDiscard.emailRequired')),
    reason: Yup.string().required(t('paymentDiscard.reasonRequired')),
    donateValue: Yup.string()
      .nullable()
      .defined(t('paymentDiscard.purposeRequired'))
      .required(t('paymentDiscard.purposeRequired')),
  });
