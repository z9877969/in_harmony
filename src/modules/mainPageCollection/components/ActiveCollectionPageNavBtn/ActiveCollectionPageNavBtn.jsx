'use client';

import { usePathname } from 'next/navigation';
import { Button } from '@/shared/components';
import { useRouter } from 'next/compat/router';
import { ROUTES } from '@/shared/constants';
import { useTranslation } from 'react-i18next';

const ActiveCollectionPageNavBtn = ({ className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  const { t } = useTranslation('mainPage');

  return (
    <Button
      onClick={() => router.push(`/${locale}/${ROUTES.COLLECTION}`)}
      border="true"
      className={className}
      size="large"
      fontSize="eighteen"
    >
      {t('activeCollection.moreBtn')}
    </Button>
  );
};

export default ActiveCollectionPageNavBtn;
