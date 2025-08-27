import createHttpError from 'http-errors';
import { LANGUAGE_TYPE } from '../../constants';
import { responseError } from '../responseError';

export const validateLocale = (next) => async (req, res) => {
  try {
    const { locale } = req.query;

    if (!Object.values(LANGUAGE_TYPE).includes(locale)) {
      throw createHttpError(400, 'Language is not available');
    }

    return await next(req, res);
  } catch (error) {
    responseError(res, error);
  }
};
