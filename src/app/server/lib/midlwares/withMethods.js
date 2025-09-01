import { applyCors } from '../applyCors';
import { responseError } from '../responseError';

export const withMethods = (handlers) => async (req, res) => {
  await applyCors(req, res);

  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', Object.keys(handlers).join(', '));
    return res.status(200).end();
  }

  const handlerForMethod = handlers[req.method];

  if (handlerForMethod) {
    try {
      return await handlerForMethod(req, res);
    } catch (error) {
      responseError(res, error);
    }
  }

  res.setHeader('Allow', Object.keys(handlers).join(', '));
  res.status(405).json({ message: `Method ${req.method} Not Allowed` });
};
