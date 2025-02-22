'use client';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { ROUTES, LINKDATA } from '@/shared/constants';
import LinkButton from '@/shared/components/LinkButton/LinkButton';
import s from './HelpButton.module.scss';
const HelpButton = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const { t } = useTranslation('aboutPage');

  return (
    <div className={s.buttonsContainer}>
      <LinkButton
        path={`/${locale}/${ROUTES.PAYMENTS(0)}`}
        linkText={t('togetherSection.helpBtn')}
        type={LINKDATA.TYPE_DARK_BF}
        className={s.buttonSize}
      />
    </div>
  );
};

export default HelpButton;
