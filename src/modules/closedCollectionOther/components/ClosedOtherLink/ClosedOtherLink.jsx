'use client';
import LinkButton from '@/shared/components/LinkButton/LinkButton';
import { LINKDATA, ROUTES } from '@/shared/constants';
import { useTranslation } from 'react-i18next';
import s from './ClosedOtherLink.module.scss';
import { usePathname } from 'next/navigation';

function ClosedOtherLink() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const { t } = useTranslation('closedCollectionPage');
  return (
    <div className={s.linkWrapper}>
      <LinkButton
        path={`/${locale}/${ROUTES.REPORTING}`}
        linkText={t('allReports')}
        type={LINKDATA.TYPE_LIGHT_BORDER}
        className={s.collectionBtn}
      />
    </div>
  );
}

export default ClosedOtherLink;
