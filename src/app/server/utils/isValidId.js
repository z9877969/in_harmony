import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';
import { responseError } from '../lib';

const isValidId = (next) => async (req, res) => {
  try {
    const { id } = req.query;
    if (!isValidObjectId(id)) {
      throw createHttpError(400, 'Invalid id');
    }
    return await next(req, res);
  } catch (error) {
    return responseError(res, error);
  }
};

export default isValidId;
