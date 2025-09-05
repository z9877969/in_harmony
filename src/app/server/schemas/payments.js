import {} from '@/shared/constants';
import Joi from 'joi';
import {
  DATE_REGEX,
  PAYMENT_STATUSES,
  PAYMENT_TYPE,
  SORT_ORDER,
} from '../constants';

export const query = Joi.object({
  page: Joi.number().integer().min(1),
  perPage: Joi.number().integer().min(1),
  sortField: Joi.string().valid(
    'amount',
    'type',
    'isPublic',
    'clientFirstName',
    'clientEmail',
    'donateTitle',
    'donateValue',
    'message',
    'orderDate',
    'status'
  ),
  sortOrder: Joi.string().valid(SORT_ORDER.ASC, SORT_ORDER.DESC),
  minAmount: Joi.number().min(0),
  maxAmount: Joi.number(),
  type: Joi.string().valid(PAYMENT_TYPE.ONE_TIME, PAYMENT_TYPE.REGULAR),
  isPublic: Joi.bool(),
  collectionTag: Joi.string(),
  minDate: Joi.string().pattern(DATE_REGEX),
  maxDate: Joi.string().pattern(DATE_REGEX),
  status: Joi.string().valid(...Object.values(PAYMENT_STATUSES)),
}).unknown(true);
