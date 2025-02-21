'use client';
import s from './CollectionStatus.module.scss';

import { useTranslation } from 'react-i18next';

const CollectionStatusLabel = ({ status }) => {
  const { t } = useTranslation('activeCollectionPage');
  return (
    <p className={s.containerStatus}>
      <span>•</span>
      {t(`hero.collectionStatus.${status}`)}
    </p>
  );
};

export default CollectionStatusLabel;
