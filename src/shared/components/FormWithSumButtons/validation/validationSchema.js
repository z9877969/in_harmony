import * as Yup from 'yup';

export const validationSchemaAmount = (t) =>
  Yup.object().shape({
    donateTime: Yup.string().required(),
    amount: Yup.number()
      .typeError()
      .positive(t('paymentAmount.positiveRequired'))
      .required(t('paymentAmount.amountRequired')),
  });

export const validationSchemaAmountEmail = (t) =>
  Yup.object().shape({
    donateTime: Yup.string().required(),
    amount: Yup.number()
      .typeError()
      .positive(t('paymentAmount.positiveRequired'))
      .required(t('paymentAmount.amountRequired')),
    email: Yup.string()
      .email(t('paymentDiscard.emailInvalid'))
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, t('paymentDiscard.emailInvalid'))
      .required(t('paymentDiscard.emailRequired')),
  });
