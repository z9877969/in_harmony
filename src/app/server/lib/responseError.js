export const responseError = (res, error = {}, reservedErrorMessage) => {
  const {
    status = 500,
    message = reservedErrorMessage || 'Internal server error',
  } = error;
  res.status(status).json({ message });
};
