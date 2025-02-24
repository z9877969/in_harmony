'use client';
import s from './CollectionStatus.module.scss';

import { useTranslation } from 'react-i18next';

const CollectionStatusLabel = ({ status, term, days, period }) => {
  const { t } = useTranslation('activeCollectionPage');
  return (
    <>
      {status === 'active' ? (
        <p className={s.containerStatus}>
          <span>•</span>
          {t(`hero.collectionStatus.${status}`)}
        </p>
      ) : (
        <div className={s.closedContainer}>
          <p className={s.closedText}>{t(`hero.collectionStatus.${status}`)}</p>
          <p className={s.closedTextTerm}>
            {term}{' '}
            <span className={s.days}>
              {days}&nbsp;
              {period}
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default CollectionStatusLabel;
