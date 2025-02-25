'use client';
import LinkButton from '@/shared/components/LinkButton/LinkButton';
import { LINKDATA, ROUTES } from '@/shared/constants';
import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './CollectionLinkButton.module.scss';

function CollectionLinkButton() {
  const { t } = useTranslation('closedCollectionPage');
  return (
    <div className={s.linkWrapper}>
      <LinkButton
        path={ROUTES.REPORTING}
        linkText={t('allReports')}
        type={LINKDATA.TYPE_LIGHT_BORDER}
        className={s.collectionBtn}
      />
    </div>
  );
}

export default CollectionLinkButton;
