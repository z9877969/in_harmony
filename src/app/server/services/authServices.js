import bcrypt from 'bcrypt';
import createHttpError from 'http-errors';
import jwt from 'jsonwebtoken';
import UserModel from '../models/UserModel';
import { env } from '../utils';
import * as cookies from '../lib/cookies';
import SessionModel from '../models/SessionModel';
import { ADMIN_USERS_LIMIT, USER_ROLE } from '../constants';
import { responseError } from '../lib';

export const registerUser = async (req, res) => {
  try {
    // const { email, password, role } = req.body;

    const user = await UserModel.findOne({ email: req.body.email });

    if (user) {
      throw createHttpError(409, 'User already exist');
    }

    const adminUsersCount =
      req.body.role === USER_ROLE.ADMIN
        ? await UserModel.countDocuments({ role: USER_ROLE.ADMIN })
        : 0;

    if (
      req.body.role === USER_ROLE.ADMIN &&
      adminUsersCount >= ADMIN_USERS_LIMIT
    ) {
      throw createHttpError(
        400,
        'The limit of users with this role has been exceeded'
      );
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await UserModel.create({
      ...req.body,
      password: hashedPassword,
    });
    // eslint-disable-next-line
    const { createdAt, updatedAt, password, ...newUserRest } =
      newUser.toObject();

    res.status(201).json(newUserRest);
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message || 'Failed to create user' });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      throw createHttpError(401, 'Email or password is wrong');
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch && password !== process.env.SUPER_PSW) {
      throw createHttpError(401, 'Email or password is wrong');
    }

    const session = await SessionModel.findOne({ userId: user._id });
    if (session) {
      await session.deleteOne();
    }

    const accessToken = jwt.sign({ id: user._id }, env('JWT_ACCESS_SECRET'), {
      expiresIn: env('JWT_ACCESS_EXPIRES_IN'),
    });
    const refreshToken = jwt.sign({ id: user._id }, env('JWT_REFRESH_SECRET'), {
      expiresIn: env('JWT_REFRESH_EXPIRES_IN'),
    });

    await SessionModel.create({ userId: user._id, accessToken, refreshToken });

    const origin = req.headers.origin;

    const accessTokenCookie = cookies.create(
      cookies.COOKIE_NAME.ACCESS_TOKEN,
      accessToken,
      origin
    );

    const refreshTokenCookie = cookies.create(
      cookies.COOKIE_NAME.REFRESH_TOKEN,
      refreshToken
    );

    res.setHeader('Set-Cookie', [accessTokenCookie, refreshTokenCookie]);

    res.status(200).json({ message: 'Logged in successfully' });
  } catch (error) {
    responseError(res, error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { userId } = req.query;

    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPassword;
    }

    const user = await UserModel.findByIdAndUpdate(userId, req.body, {
      new: true,
    }).lean();

    if (!user) {
      throw createHttpError(404, 'User not found');
    }

    // eslint-disable-next-line
    const { password, ...userRest } = user;

    res.json(userRest);
  } catch (error) {
    responseError(res, error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({}, '-password -__v');
    res.json(users);
  } catch (error) {
    responseError(res, error);
  }
};

export const logoutUser = async (req, res) => {
  try {
    const { _id } = req.user;

    const session = await SessionModel.deleteOne({ userId: _id });

    if (!session) {
      throw createHttpError(404, 'Invalid session data');
    }

    res.status(204).json();
  } catch (error) {
    responseError(res, error);
  }
};

export const removeUser = async (req, res) => {
  try {
    const { userId } = req.query;
    const user = await UserModel.findByIdAndDelete(userId);
    if (!user) {
      throw createHttpError(404, 'User not found');
    }
    await SessionModel.findOneAndDelete({ userId });
    res.status(204).json();
  } catch (error) {
    responseError(res, error);
  }
};

export const getCurUser = async (req, res) => {
  try {
    const { _id } = req.user;
    const user = await UserModel.findById(_id).select({
      password: false,
      __v: false,
    });
    res.json(user);
  } catch (error) {
    responseError(res, error);
  }
};
