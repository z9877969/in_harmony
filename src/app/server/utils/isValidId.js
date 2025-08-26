import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';
import { responseError } from '../lib';

const isValidId = (next) => async (req, res) => {
  try {
    const hasInvalidId = Object.entries(req.query)
      .filter(([key]) => key.toLowerCase().endsWith('id'))
      // eslint-disable-next-line
      .some(([_, value]) => {
        return !isValidObjectId(value);
      });
    if (hasInvalidId) {
      throw createHttpError(400, 'Invalid id');
    }
    return await next(req, res);
  } catch (error) {
    return responseError(res, error);
  }
};

export default isValidId;
