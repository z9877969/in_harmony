import { checkCors } from './checkCors';

export const withMethods = (handlers) => (req, res) => {
  const handlerForMethod = handlers[req.method];

  if (handlerForMethod) {
    return checkCors(handlerForMethod)(req, res);
  }

  res.setHeader('Allow', Object.keys(handlers).join(', '));
  res.status(405).json({ message: `Method ${req.method} Not Allowed` });
};
