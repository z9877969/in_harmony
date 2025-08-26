import createHttpError from 'http-errors';
import { responseError } from '../responseError';

export const validateEmptyBody = (next) => async (req, res) => {
  try {
    if (!req.body || !Object.keys(req.body).length) {
      throw createHttpError(400, 'Bad request: Body cann`t be empty');
    }
    return await next(req, res);
  } catch (error) {
    responseError(res, error);
  }
};
