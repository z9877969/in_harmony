import dotenv from 'dotenv';

dotenv.config();

const env = (name, defaultValues) => {
  const value = process.env[name];
  if (value) return value;
  if (defaultValues) return defaultValues;
  throw new Error(`Missing: process.env['${name}']`);
};

export default env;
