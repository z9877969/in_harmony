'use client';

import LinkButton from '@/shared/components/LinkButton/LinkButton.jsx';
import { LINKDATA, ROUTES } from '@/shared/constants/index.js';
import { usePathname } from 'next/navigation';

import s from './LinkButtonAboutPageMakeDonate.module.scss';
import { useTranslation } from 'react-i18next';

const LinkButtonAboutPageMakeDonate = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  const { t } = useTranslation('aboutPage');

  return (
    <>
      <div className={s.buttonsContainer}>
        <LinkButton
          path={`/${locale}/${ROUTES.PAYMENTS(1)}`}
          linkText={t('togetherSection.helpBtn')}
          type={LINKDATA.TYPE_DARK_BF}
          className={s.buttonSize}
        />
      </div>
    </>
  );
};

export default LinkButtonAboutPageMakeDonate;
