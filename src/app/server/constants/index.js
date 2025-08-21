import { env } from '../utils';

export const USER_ROLE = {
  ADMIN: 'admin',
  EDITOR: 'editor',
};

export const ADMIN_USERS_LIMIT = Number(process.env.ADMIN_USERS_LIMIT) || 2;

export const JWT_ACCESS_SECRET = env(
  'JWT_ACCESS_SECRET',
  'your-super-secret-access-key-that-is-long'
);
export const JWT_REFRESH_SECRET = env(
  'JWT_REFRESH_SECRET',
  'your-super-secret-refresh-key-that-is-long'
);
