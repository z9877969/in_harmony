import { LANGUAGES } from '../constants';

export const checkSupportedLocales = (locale) => {
  return Object.values(LANGUAGES).includes(locale);
};
