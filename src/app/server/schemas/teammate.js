import Joi from 'joi';
import { LANGUAGE_TYPE } from '../constants';

const availableLocalesList = Object.values(LANGUAGE_TYPE);

export const create = Joi.object({
  name: Joi.string().max(24).required(),
  role: Joi.string().max(48).required(),
  description: Joi.string().max(320).required(),
  locale: Joi.string()
    .valid(...availableLocalesList)
    .required(),
});

export const update = Joi.object({
  name: Joi.string().max(24),
  role: Joi.string().max(48),
  description: Joi.string().max(320),
});
