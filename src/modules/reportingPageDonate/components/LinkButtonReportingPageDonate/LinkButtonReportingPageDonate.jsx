'use client';

import { usePathname } from 'next/navigation';

import { LINKDATA, ROUTES } from '@/shared/constants';
import { useTranslation } from 'react-i18next';
import LinkButton from '@/shared/components/LinkButton/LinkButton.jsx';

import s from './LinkButtonReportingPageDonate.module.scss';

const LinkButtonReportingPageDonate = () => {
  const { t } = useTranslation('reportingPage');
  const pathname = usePathname();

  const locale = pathname.split('/')[1];
  return (
    <>
      <LinkButton
        path={`/${locale}/${ROUTES.COLLECTION}`}
        type={LINKDATA.TYPE_DARK_BF}
        className={s.button}
        linkText={t('button_to_collections')}
      />
    </>
  );
};

export default LinkButtonReportingPageDonate;
