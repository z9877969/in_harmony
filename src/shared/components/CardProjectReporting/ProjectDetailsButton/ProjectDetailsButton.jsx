'use client';

import { LINKDATA, ROUTES } from '@/shared/constants';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import s from './ProjectDetailsButton.module.scss';
import LinkButton from '../../LinkButton/LinkButton';

function ProjectDetailsButton({ id }) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const { t } = useTranslation('closedCollectionPage');
  return (
    <div className={s.btnWrapper}>
      <LinkButton
        path={`/${locale}/${ROUTES.COLLECTION}/${ROUTES.CLOSED}/${id}`}
        linkText={t('button_details')}
        type={LINKDATA.TYPE_LIGHT_BORDER}
      />
    </div>
  );
}

export default ProjectDetailsButton;
