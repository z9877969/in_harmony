import createHttpError from 'http-errors';

function parseRequestBody(req) {
  if (!req.body) {
    throw createHttpError(400, 'Request body is missing');
  }

  let parsedBody =
    typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

  if (typeof parsedBody === 'object' && parsedBody !== null) {
    const keys = Object.keys(parsedBody);

    if (keys.length === 1 && typeof keys[0] === 'string') {
      try {
        parsedBody = JSON.parse(keys[0]);
      } catch (error) {
        throw createHttpError(400, 'Invalid JSON structure in request body');
      }
    }
  }

  return parsedBody;
}

export default parseRequestBody;
