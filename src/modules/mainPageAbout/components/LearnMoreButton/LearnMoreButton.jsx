'use client';

import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { ROUTES, LINKDATA } from '@/shared/constants';
import LinkButton from '@/shared/components/LinkButton/LinkButton';

const LearnMoreButton = ({ style }) => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const { t } = useTranslation('mainPage');

  return (
    <div className={style}>
      <LinkButton
        path={`/${locale}/${ROUTES.ABOUT}`}
        linkText={t('about.learnMore')}
        type={LINKDATA.TYPE_LIGHT_BORDER}
      />
    </div>
  );
};

export default LearnMoreButton;
