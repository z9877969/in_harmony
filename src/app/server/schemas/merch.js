import Joi from 'joi';
import { MERCH_BTN_STATUS } from '../constants';

export const update = Joi.object({
  link: Joi.string().max(512),
  content: Joi.string().max(12),
  status: Joi.string().valid(MERCH_BTN_STATUS.ON, MERCH_BTN_STATUS.OFF),
});
