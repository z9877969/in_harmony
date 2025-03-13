import * as Yup from 'yup';

export const validationSchema = (t) =>
  Yup.object().shape({
    email: Yup.string()
      .email(t('paymentDiscard.emailInvalid'))
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, t('paymentDiscard.emailInvalid'))
      .required(t('paymentDiscard.emailRequired')),
    reason: Yup.string().required(t('paymentDiscard.reasonRequired')),
    donate: Yup.object()
      .shape({
        title: Yup.string().required(t('paymentDiscard.purposeRequired')),
        value: Yup.string().required(t('paymentDiscard.purposeRequired')),
      })
      .nullable()
      .required(t('paymentDiscard.purposeRequired')),
  });
