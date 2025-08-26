import { responseError } from '../responseError';
import { checkCors } from './checkCors';

export const withMethods = (handlers) => (req, res) => {
  const handlerForMethod = handlers[req.method];

  if (handlerForMethod) {
    try {
      return checkCors(handlerForMethod)(req, res);
    } catch (error) {
      responseError(res, error);
    }
  }

  res.setHeader('Allow', Object.keys(handlers).join(', '));
  res.status(405).json({ message: `Method ${req.method} Not Allowed` });
};
