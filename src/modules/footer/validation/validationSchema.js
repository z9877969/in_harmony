import * as Yup from 'yup';

export const validationSchema = (t) =>
  Yup.object({
    name: Yup.string()
      .min(2, t('support.nameLenght'))
      .required(t('support.nameRequired')),
    email: Yup.string()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, t('support.emailInvalid'))
      .required(t('support.emailRequired')),
    message: Yup.string()
      .min(5, t(`support.messageLenght`))
      .required(t('support.messageRequired')),
  });
