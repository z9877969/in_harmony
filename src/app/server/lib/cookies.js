import { serialize } from 'cookie';
import { env } from '../utils';
import { calcCookiesMaxAge } from '../utils/calcCookiesMaxAge';

export const COOKIE_NAME = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
};

export const create = (cookieName, cookieValue) => {
  let expiresIn;
  cookieName === COOKIE_NAME.ACCESS_TOKEN &&
    (expiresIn = 'JWT_ACCESS_EXPIRES_IN');
  cookieName === COOKIE_NAME.REFRESH_TOKEN &&
    (expiresIn = 'JWT_REFRESH_EXPIRES_IN');

  return serialize(cookieName, cookieValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: env('COOKIES_SAME_SITE', 'None'),
    path: '/',
    maxAge: calcCookiesMaxAge(env(expiresIn)),
  });
};
