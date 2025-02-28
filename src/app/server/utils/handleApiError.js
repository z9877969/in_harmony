// import ApiError from './apiError';

// function handleApiError(error, res) {
//   // eslint-disable-next-line no-console
//   console.error('❌ API Error:', error);

//   if (error instanceof ApiError) {
//     return res.status(error.statusCode).json({ message: error.message });
//   }

//   return res.status(500).json({ message: 'Internal Server Error' });
// }

// export default handleApiError;

import createHttpError from 'http-errors';

function handleApiError(error, res) {
  // eslint-disable-next-line no-console
  console.error('❌ API Error:', error);

  if (error instanceof createHttpError.HttpError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  return res.status(500).json({ message: 'Internal Server Error' });
}

export default handleApiError;
