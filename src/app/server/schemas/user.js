import Joi from 'joi';
import { USER_ROLE } from '../constants';

export const registration = Joi.object({
  name: Joi.string().max(64).required(),
  email: Joi.string().email().max(64).required(),
  password: Joi.string().min(8).max(128).required(),
  role: Joi.string().valid(USER_ROLE.ADMIN, USER_ROLE.EDITOR),
});

export const login = Joi.object({
  email: Joi.string().email().max(64).required(),
  password: Joi.string().min(8).max(128).required(),
});

export const update = Joi.object({
  name: Joi.string().max(64),
  email: Joi.string().email().max(64),
  role: Joi.string().valid(USER_ROLE.ADMIN, USER_ROLE.EDITOR),
});
