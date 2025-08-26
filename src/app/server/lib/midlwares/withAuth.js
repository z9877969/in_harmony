import jwt from 'jsonwebtoken';
import { parse } from 'cookie';
import createHttpError from 'http-errors';
import { env } from '../../utils';
import UserModel from '../../models/UserModel';
import SessionModel from '../../models/SessionModel';
import * as cookies from '../cookies';
import { responseError } from '../responseError';
import { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } from '../../constants';

export const withAuth = (handler) => {
  return async (req, res) => {
    try {
      const curCookies = parse(req.headers.cookie || '');
      let accessToken = curCookies.accessToken;
      const refreshToken = curCookies.refreshToken;

      try {
        if (accessToken) {
          const payload = jwt.verify(accessToken, JWT_ACCESS_SECRET);
          if (!payload.id) {
            throw createHttpError(401, 'Unauthorized: Invalid access token');
          }
          const session = await SessionModel.findOne({ userId: payload.id });
          const user = await UserModel.findById(payload.id);
          if (!session || !user || accessToken !== session.accessToken) {
            throw createHttpError(401, 'Unauthorized: Invalid access token');
          }
          req.user = user;
          return handler(req, res);
        } else {
          throw createHttpError(401, 'Unauthorized: Access token missing');
        }
      } catch (err) {
        if (!refreshToken) {
          throw createHttpError(403, 'Access denied: No refresh token');
        }
        const payload = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
        if (!payload.id) {
          throw createHttpError(403, 'Access denied: Invalid refresh token');
        }
        const session = await SessionModel.findOne({ userId: payload.id });
        const user = await UserModel.findById(payload.id);
        if (!session || !user || refreshToken !== session.refreshToken) {
          throw createHttpError(403, 'Access denied: Invalid refresh token');
        }
        const newAccessToken = jwt.sign({ id: user.id }, JWT_ACCESS_SECRET, {
          expiresIn: env('JWT_ACCESS_EXPIRES_IN'),
        });
        const accessTokenCookie = cookies.create(
          cookies.COOKIE_NAME.ACCESS_TOKEN,
          newAccessToken
        );
        res.setHeader('Set-Cookie', accessTokenCookie);
        req.user = user;
        return await handler(req, res);
      }
    } catch (error) {
      responseError(res, error);
    }
  };
};
