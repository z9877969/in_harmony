import { createInstance } from 'i18next';
import Backend from 'i18next-fs-backend';
import i18nConfig from '../../../i18nConfig.js';

export async function initServerI18n(locale, namespaces = ['common']) {
  const i18nInstance = createInstance();

  await i18nInstance.use(Backend).init({
    lng: locale,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    ns: namespaces,
    backend: {
      loadPath: `./src/i18n/locales/{{lng}}/{{ns}}.json`,
    },
  });

  return {
    t: i18nInstance.t,
    i18n: i18nInstance,
  };
}
