'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

function CardQuantityComments({ quantity }) {
  const { t } = useTranslation('closedCollectionPage');
  return <span>{quantity ? quantity : `${t('noCommentsQuantity')}`}</span>;
}

export default CardQuantityComments;
