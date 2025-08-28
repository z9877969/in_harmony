import createHttpError from 'http-errors';
import { LANGUAGE_TYPE } from '../../constants';
import { responseError } from '../responseError';

const availableLocales = Object.values(LANGUAGE_TYPE);

export const validateLocale = (next) => async (req, res) => {
  try {
    const { locale } = req.query;

    if (!availableLocales.includes(locale)) {
      throw createHttpError(
        400,
        `locale is requered and must be one of ${JSON.stringify(availableLocales)}`
      );
    }

    return await next(req, res);
  } catch (error) {
    responseError(res, error);
  }
};
