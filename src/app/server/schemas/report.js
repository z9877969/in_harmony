import Joi from 'joi';
import { LANGUAGE_TYPE } from '../constants';

export const create = Joi.object({
  month: Joi.string().max(16).required(),
  year: Joi.string()
    .pattern(/20([2][5-9]|[3-9][0-9])/)
    .required(),
  url: Joi.string().uri().required(),
  language: Joi.string().valid(LANGUAGE_TYPE.EN, LANGUAGE_TYPE.UA).required(),
});

export const update = Joi.object({
  month: Joi.string().max(16),
  year: Joi.number().min(2025),
  url: Joi.string().uri(),
  language: Joi.string().valid(LANGUAGE_TYPE.EN, LANGUAGE_TYPE.UA),
});
