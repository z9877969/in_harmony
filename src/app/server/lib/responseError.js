export const responseError = (res, error = {}) => {
  const { status = 500, message = 'Internal server error' } = error;
  res.status(status).json({ message });
};
