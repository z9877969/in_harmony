import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, ({ min, path }) => `Ім’я повинно бути не менше ${min} символів`)
    .required('Ім’я обов’язкове'),
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Невірна електронна адреса')
    .required('Електронна адреса обов’язкова'),
  message: Yup.string()
    .min(
      5,
      ({ min, path }) => `Повідомленнямає містити не менше ${min} символів`
    )
    .required('Повідомлення обов’язкове'),
});
