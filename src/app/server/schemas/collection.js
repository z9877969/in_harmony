import Joi from 'joi';
import {
  COLLECTION_DAYS_PERIOD,
  COLLECTION_IMPORTANCE_TYPE,
  COLLECTION_PEOPLE_DONATE_TITLES,
  COLLECTION_STATUS_TYPE,
} from '../constants';

export const create = Joi.object({
  title: Joi.string().max(48).required(),
  collected: Joi.number().min(0).required(),
  target: Joi.number().min(0).required(),
  alt: Joi.string().max(24).required(),
  peopleDonate: Joi.number().integer().min(0).required(),
  peopleDonate_title: Joi.string()
    .valid(
      ...COLLECTION_PEOPLE_DONATE_TITLES.EN,
      ...COLLECTION_PEOPLE_DONATE_TITLES.UA
    )
    .required(),
  desc: Joi.string().max(144).required(),
  days: Joi.number().integer().min(0),
  period: Joi.string()
    .valid(...COLLECTION_DAYS_PERIOD.EN, ...COLLECTION_DAYS_PERIOD.UA)
    .required(),
  quantity: Joi.number().integer().min(0),
  //===========================
  long_desc: Joi.array()
    .min(1)
    .items(Joi.string().max(224).required())
    .required(),
  status: Joi.string().valid(
    COLLECTION_STATUS_TYPE.ACTIVE,
    COLLECTION_STATUS_TYPE.CLOSED
  ),
  value: Joi.string().max(48).required(),
  importance: Joi.string()
    .valid(
      COLLECTION_IMPORTANCE_TYPE.URGENT,
      COLLECTION_IMPORTANCE_TYPE.IMPORTANT,
      COLLECTION_IMPORTANCE_TYPE.NON_URGENT,
      COLLECTION_IMPORTANCE_TYPE.PERMANENT
    )
    .required(),
});

export const update = Joi.object({
  title: Joi.string().max(48),
  collected: Joi.number().min(0),
  target: Joi.number().min(0),
  alt: Joi.string().max(24),
  peopleDonate: Joi.number().integer().min(0),
  peopleDonate_title: Joi.string().valid(
    ...COLLECTION_PEOPLE_DONATE_TITLES.EN,
    ...COLLECTION_PEOPLE_DONATE_TITLES.UA
  ),
  desc: Joi.string().max(144),
  days: Joi.number().integer(),
  period: Joi.string().valid(
    ...COLLECTION_DAYS_PERIOD.EN,
    ...COLLECTION_DAYS_PERIOD.UA
  ),
  quantity: Joi.number().integer().min(0),
  //===========================
  long_desc: Joi.array().items(Joi.string().max(224)),
  status: Joi.string().valid(
    COLLECTION_STATUS_TYPE.ACTIVE,
    COLLECTION_STATUS_TYPE.CLOSED
  ),
  value: Joi.string().max(48),
  importance: Joi.string().valid(
    COLLECTION_IMPORTANCE_TYPE.URGENT,
    COLLECTION_IMPORTANCE_TYPE.IMPORTANT,
    COLLECTION_IMPORTANCE_TYPE.NON_URGENT,
    COLLECTION_IMPORTANCE_TYPE.PERMANENT
  ),
});
