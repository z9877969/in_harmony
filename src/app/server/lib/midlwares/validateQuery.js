import createHttpError from 'http-errors';
import { responseError } from '../responseError';

export const validateQuery = (schema) => (next) => async (req, res) => {
  try {
    const { error } = schema.validate(req.query, { abortEarly: true });

    if (error) {
      throw createHttpError(400, error.message);
    }
    return await next(req, res);
  } catch (error) {
    responseError(res, error);
  }
};
