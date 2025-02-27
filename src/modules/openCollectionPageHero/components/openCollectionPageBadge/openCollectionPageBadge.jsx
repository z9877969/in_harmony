'use client';
import React from 'react';
import s from './openCollectionPageBadge.module.scss';
import { useTranslation } from 'react-i18next';
const OpenCollectionPageBadge = ({ importance }) => {
  const { t } = useTranslation('activeCollectionCard');
  return (
    <>
      {importance && (
        <div className={importance === 'urgent' ? s.importance : s.nonUrgent}>
          {t(`importanceType.${importance}`)}
        </div>
      )}
    </>
  );
};

export default OpenCollectionPageBadge;
