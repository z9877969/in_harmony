import path from 'node:path';
import { env } from '../utils';
import {
  DONATE_TYPE,
  PAYMENT_STATUSES as SHARED_PAYMENT_STATUSES,
} from '@/shared/constants';

export const USER_ROLE = {
  ADMIN: 'admin',
  EDITOR: 'editor',
};

export const ADMIN_USERS_LIMIT = Number(process.env.ADMIN_USERS_LIMIT) || 2;

export const JWT_ACCESS_SECRET = env(
  'JWT_ACCESS_SECRET',
  'your-super-secret-access-key-that-is-long'
);

export const JWT_REFRESH_SECRET = env(
  'JWT_REFRESH_SECRET',
  'your-super-secret-refresh-key-that-is-long'
);

export const COLLECTION_IMPORTANCE_TYPE = {
  URGENT: 'urgent',
  IMPORTANT: 'important',
  NON_URGENT: 'non-urgent',
  PERMANENT: 'permanent',
};

export const COLLECTION_STATUS_TYPE = {
  ACTIVE: 'active',
  CLOSED: 'closed',
};

export const COLLECTION_PEOPLE_DONATE_TITLES = {
  EN: ['donor', 'donors'],
  UA: ['донор', 'донори', 'донорів'],
};

export const LANGUAGE_TYPE = {
  EN: 'en',
  UA: 'ua',
};

export const COLLECTION_COLLECTED_TITLES = {
  EN: 'Collected',
  UA: 'Вартість',
};

export const COLLECTION_TARGET_TITLES = {
  EN: 'Target',
  UA: 'Ціль',
};

export const COLLECTION_TERMS_LABEL = {
  EN: 'Implementation Period:',
  UA: 'Термін реалізації:',
};

export const COLLECTION_COMMENTS_LABEL = {
  EN: 'Reviews:',
  UA: 'Відгуків:',
};

export const COLLECTION_DAYS_PERIOD = {
  EN: ['day', 'days'],
  UA: ['день', 'дні', 'днів'],
};

export const CURRENCY_TYPES = {
  EN: 'UAH',
  UA: 'грн',
};

export const TEMP_UPLOAD_DIR = path.join(process.cwd(), 'temp');
export const UPLOAD_DIR = path.join(process.cwd(), 'uploads');
export const PUBLIC_IMAGES_ALL_DIR = path.join(
  process.cwd(),
  'public',
  'images',
  'all'
);

export const APP_DOMAIN =
  process.env.NODE_ENV === 'development'
    ? env('DEV_APP_DOMAIN')
    : env('PROD_APP_DOMAIN');

export const CLIENT_DOMAINS_LIST = [
  env('DEV_CLIENT_DOMAIN'),
  env('PROD_CLIENT_DOMAIN'),
];

export const PARTNER_TYPES = {
  PARTNERS: 'partners',
};

export const MERCH_BTN_STATUS = {
  ON: 'on',
  OFF: 'off',
};

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const PAYMENT_TYPE = DONATE_TYPE;
export const DATE_REGEX =
  /^20(2[5-9]|[3-9][0-9])-(0[1-9]|1[0-2])-([0-2][0-9]|3[01])$/;
export const PAYMENT_STATUSES = SHARED_PAYMENT_STATUSES;
