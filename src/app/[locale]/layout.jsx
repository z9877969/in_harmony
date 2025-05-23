import dynamic from 'next/dynamic';

import initTranslations from '@/i18n/utils/i18n';
import TranslationsProvider from '@/i18n/utils/TranslationsProvider';
import { Header } from '@/modules/header';
import { Breadcrumbs } from '@/shared/components';
import ErrorBoundaryWithTranslation from '@/shared/components/ErrorBoundary/ErrorBoundaryWithTranslation/ErrorBoundaryWithTranslation';
import { NAMESPACES } from '@/shared/constants';
import { insideServerApi as api } from '@/shared/services';
import clsx from 'clsx';
import { dir } from 'i18next';
import { Montserrat, Open_Sans } from 'next/font/google';
import i18nConfig from '../../../i18nConfig';
const Footer = dynamic(
  () => import('@/modules/footer/components/Footer/Footer'),
  { ssr: false }
);

import '../globals.scss';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-montserrat',
});

const open_sans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-open_sans',
});

const i18nNamespaces = NAMESPACES;

const mainMetadataDict = {
  en: {
    description: '🫶 Helping those in difficult life situations',
  },
  ua: {
    description:
      '🫂 Благодійна Організація\n \
    🫶 Допомагаємо тим, хто опинився в важких життєвих умовах.',
  },
};

// eslint-disable-next-line react-refresh/only-export-components
export const generateMetadata = ({ params: { locale } }) => {
  return {
    title: 'In Harmony',
    description: mainMetadataDict[locale].description,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const { sectionsDict } = await api.getPageApi({
    locale,
    page: 'footer',
  });

  return (
    <html lang={locale} dir={dir(locale)}>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <body className={clsx(montserrat.variable, open_sans.variable)}>
          <ErrorBoundaryWithTranslation>
            <Header t={t} />
            <Breadcrumbs />

            <main>{children}</main>

            <Footer content={sectionsDict.footer.section_content} />
          </ErrorBoundaryWithTranslation>
          <div id="modal"></div>
        </body>
      </TranslationsProvider>
    </html>
  );
}
