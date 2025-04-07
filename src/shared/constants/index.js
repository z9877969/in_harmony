export const ROUTES = {
  ABOUT: 'about',
  COLLECTION: 'collection',
  ACTIVE: 'active',
  CLOSED: 'closed',
  REPORTING: 'reporting',
  PAYMENTS: (step = 1) =>
    step === 0 ? 'payments/methods' : `/payments/step/${step}`,
  TERMS: 'terms',
  POLICY: 'policy',
  DISCARD: 'discard',
};

export const SOCIALROUTES = {
  INSTAGRAM: 'https://www.instagram.com/inharmony.ua',
  TELEGRAM: 'https://t.me/inharmonyua',
  TIKTOK: 'https://www.tiktok.com/@inharmony.ua?_t=8pfFP3VEltN&_r=1',
  FACEBOOK: 'https://www.facebook.com/inharmony.com.ua',
  YOUTUBE: 'https://www.youtube.com/@inharmony_ua/shorts',
};

export const LANGUAGES = { UA: 'ua', EN: 'en' };

export const NAMESPACES = [
  'header',
  'mainPage',
  'errorBoundary',
  'notFound',
  'reportingPage',
  'forms',
  'copyIcon',
  'footer',
  'successSendMessage',
  'openCollectionGoal',
  'breadcrumbs',
  'activeCollectionCard',
  'aboutPage',
  'activeCollectionPage',
  'closedCollectionPage',
  'collectionsListPage',
  'discardPage',
  'paymentPage',
  'projectReportingCard',
  'devTeam',
  'termsAndConditions',
];

export const LINKDATA = {
  PATHHOME: '/',
  PATHABOUT: '/about',
  PATHCOLLECTION: '/collection',
  PATHREPORTING: '/reporting',
  PATHTERMS: '/terms',

  TEXTDETAILS: 'Детальніше',
  TEXTHELP: 'Допомогти',
  TEXTJOIN: 'Приєднатися',
  TEXTDONATE: 'Задонатити',

  TYPE_LIGHT_BORDER: 'bg-light_border',
  TYPE_DARK_HEART: 'bg-dark_heart',
  TYPE_LIGHT_BORDER_BF: 'bg-light_border_biggerFont',
  TYPE_DARK_BF: 'bg-dark_biggerFont',
};

export const PAYMENT_CONFIG = {
  key: process.env.WAYFORPAY_KEY,
  merchantAccount: process.env.WAYFORPAY_MERCHANT_NAME,
  merchantPassword: process.env.WAYFORPAY_MERCHANT_PASSWORD,
  merchantDomainName: process.env.WAYFORPAY_MERCHANT_DOMAIN,
  requestType: { STATUS: 'STATUS', REMOVE: 'REMOVE' },
  transactionType: { CHECK_STATUS: 'CHECK_STATUS' },
  regularPaymentUrl: 'https://api.wayforpay.com/regularApi',
  paymentUrl: 'https://secure.wayforpay.com/pay',
  paymentStatusURL: 'https://api.wayforpay.com/api',
  language: 'UA',
  orderTimeout: 49000,
  merchantAuthType: 'SimpleSignature',
  productCount: '1',
  currency: 'UAH',
  defaultPaymentSystem: 'card',
  regularBehavior: 'preset',
  regularMode: 'monthly',
  regularOn: '1',
  regularCount: '12',
  apiVersion: 1,
};

export const PAYMENT_STATUSES = {
  IN_PROCESSING: 'InProcessing',
  WAITING_AUTH_COMPLETE: 'WaitingAuthComplete',
  APPROVED: 'Approved',
  PENDING: 'Pending',
  EXPIRED: 'Expired',
  REFUNDED: 'Refunded',
  VOIDED: 'Voided',
  DECLINED: 'Declined',
  REFUND_IN_PROCESSING: 'RefundInProcessing',
  // статуси регулярних платежів
  ACTIVE: 'Active', // - регулярний платіж активний, працює
  SUSPENDED: 'Suspended', // - регулярний платіж призупинено
  CREATED: 'Created', // - регулярний платіж створений, але не активований
  REMOVED: 'Removed', // - регулярний платіж видалений
  CONFIRMED: 'Confirmed', // - службовий статус
  COMPLETED: 'Completed', // - регулярний платіж завершено
};

export const TELEGRAM_CONFIG = {
  TOKEN: process.env.TELEGRAM_TOKEN,
  CHAT_ID: process.env.TELEGRAM_CHAT_ID,
  TIMEOUT_S: 60,
};

export const DONATE_TYPE = {
  REGULAR: 'regular',
  ONE_TIME: 'one-time',
};

export const SENDPULSE_CONFIG = {
  URL_ACCESS_TOKEN: 'https://api.sendpulse.com/oauth/access_token',
  GRANT_TYPE: 'client_credentials',
  CLIENT_ID: process.env.SENDPULSE_CLIENT_ID,
  CLIENT_SECRET: process.env.SENDPULSE_CLIENT_SECRET,
  URL_SMTP_EMAIL: 'https://api.sendpulse.com/smtp/emails',
  SENDER_NAME: process.env.SENDPULSE_SENDER_NAME,
  SENDER_EMAIL: process.env.SENDPULSE_SENDER_EMAIL,
};

export const FLIPPED_TIME_MS = 15000;

export const donorsDict = {
  ua: { 1: 'донор', 2: 'донори', 3: 'донорів' },
  en: { 1: 'donor', 2: 'donors' },
};

export const NO_DATA_FOUND = 'No data found';

export const WFP_COMMISION = 2;
