export const composeMidlwares = (...middlewares) => {
  const handler = middlewares.pop();
  return middlewares.reduceRight((acc, fn) => fn(acc), handler);
};
