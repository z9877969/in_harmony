import createHttpError from 'http-errors';

export const validateBody = (schema) => (next) => async (req, res) => {
  try {
    const { error } = schema.validate(req.body, { abortEarly: true });

    if (error) {
      throw createHttpError(400, error.message);
    }
    return await next(req, res);
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
};
