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
  'openCollectionGoal',
  'breadcrumbs',
  'activeCollectionCard',
  'aboutPage',
  'activeCollectionPage',
  'closedCollectionPage',
  'collectionsListPage',
  'discardPage',
  'forms',
  'paymentPage',
  'projectReportingCard',
  'devTeam',
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
  merchantDomainName: process.env.WAYFORPAY_MERCHANT_DOMAIN,
  paymentUrl: 'https://secure.wayforpay.com/pay',
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

export const FLIPPED_TIME_MS = 15000;

export const donorsDict = {
  ua: { 1: 'донор', 2: 'донори', 3: 'донорів' },
  en: { 1: 'donor', 2: 'donors' },
};
