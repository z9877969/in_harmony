import * as Yup from 'yup';

export const validationSchema = (t) =>
  Yup.object().shape({
    donateTime: Yup.string().required(),
    amount: Yup.number()
      .typeError()
      .positive(t('paymentAmount.positiveRequired'))
      .required(t('paymentAmount.amountRequired')),
  });
