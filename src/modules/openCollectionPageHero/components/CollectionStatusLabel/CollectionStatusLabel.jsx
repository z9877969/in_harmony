'use client';

import { useTranslation } from 'react-i18next';

const CollectionStatusLabel = ({ status }) => {
  const { t } = useTranslation('activeCollectionPage');
  return <p>{t(`hero.collectionStatus.${status}`)}</p>;
};

export default CollectionStatusLabel;
