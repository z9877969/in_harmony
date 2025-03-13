import * as Yup from 'yup';

export const validationSchemaPublic = (t) =>
  Yup.object().shape({
    name: Yup.string().required(t('paymentInfo.validationMessage.required')),
    email: Yup.string()
      .email(t('paymentInfo.validationMessage.email'))
      .required(t('paymentInfo.validationMessage.required')),
    message: Yup.string().required(t('paymentInfo.validationMessage.required')),
    collection: Yup.object({
      title: Yup.string().required(
        t('paymentInfo.validationMessage.dropdownTitle')
      ),
      value: Yup.string().required(
        t('paymentInfo.validationMessage.dropdownTitle')
      ),
    }),
    isChecked: Yup.boolean(),
  });

export const validationSchemaAnonymous = (t) =>
  Yup.object().shape({
    collection: Yup.object({
      title: Yup.string().required(
        t('paymentInfo.validationMessage.dropdownTitle')
      ),
      value: Yup.string().required(
        t('paymentInfo.validationMessage.dropdownTitle')
      ),
    }),
    isChecked: Yup.boolean(),
  });
