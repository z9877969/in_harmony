'use client';

import { usePathname } from 'next/navigation';
import { LINKDATA, ROUTES } from '@/shared/constants';
import { useTranslation } from 'react-i18next';
import LinkButton from '@/shared/components/LinkButton/LinkButton.jsx';

const ActiveCollectionPageNavBtn = ({ className }) => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  const { t } = useTranslation('mainPage');

  return (
    <>
      <LinkButton
        path={`/${locale}/${ROUTES.COLLECTION}`}
        linkText={t('activeCollection.moreBtn')}
        type={LINKDATA.TYPE_LIGHT_BORDER}
        className={className}
      />
    </>
  );
};

export default ActiveCollectionPageNavBtn;
