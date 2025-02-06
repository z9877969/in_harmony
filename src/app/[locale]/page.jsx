import initTranslations from '@/i18n/utils/i18n';
import TranslationsProvider from '@/i18n/utils/TranslationsProvider';
import LanguageChanger from '@/i18n/utils/LanguageChanger';

import { MainPageAbout } from '@/modules/mainPageAbout';
import { MainPageCollection } from '@/modules/mainPageCollection';
import { MainPageDonat } from '@/modules/mainPageDonat';
import { MainPageHero } from '@/modules/mainPageHero';
import { MainPageProgress } from '@/modules/mainPageProgress';

const i18nNamespaces = ['test'];

const MainPage = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <>
        <h1>{t('welcome')}</h1>
        <LanguageChanger />
        <MainPageHero />
        <MainPageCollection />
        <MainPageAbout />
        <MainPageProgress />
        <MainPageDonat />
      </>
    </TranslationsProvider>
  );
};

export default MainPage;
