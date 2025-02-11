import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';
const isValidId = (req) => {
  const { id } = req.query;
  if (!isValidObjectId(id)) {
    throw createHttpError(404, 'Not found');
  }
};

export default isValidId;
