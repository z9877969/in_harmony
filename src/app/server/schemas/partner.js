import Joi from 'joi';
import { LANGUAGE_TYPE } from '../constants';

export const create = Joi.object({
  logo: Joi.string().max(128).required(),
  link: Joi.string().max(512).required(),
  language: Joi.string()
    .valid(...Object.values(LANGUAGE_TYPE))
    .required(),
});

export const update = Joi.object({
  logo: Joi.string().max(128),
  link: Joi.string().max(512),
  language: Joi.string().valid(...Object.values(LANGUAGE_TYPE)),
});
