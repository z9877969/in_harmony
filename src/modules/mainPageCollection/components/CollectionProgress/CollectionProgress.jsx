'use client';

import { useTranslation } from 'react-i18next';
import { ProgressBar } from '@/shared/components';
import s from './CollectionProgress.module.scss';

const CollectionProgress = ({ collected, target }) => {
  const { t } = useTranslation('mainPage');
  const progress = (collected / target) * 100;
  const formattedProgress = Math.round(progress);

  return (
    <div className={s.mainProgressContainer}>
      {collected && target && (
        <div className={s.targetContainer}>
          <p className={s.targetText}>
            {t('activeCollection.collected')}
            <span className={s.counts}>{collected} &#x20B4;</span>
          </p>
          <p className={s.targetText}>
            {t('activeCollection.target')}
            <span className={s.counts}>{target} &#x20B4;</span>
          </p>
        </div>
      )}
      <div className={s.progressContainer}>
        <ProgressBar
          progress={progress}
          className={s.bar}
          progressLine={s.progressLine}
        />
        <p className={s.rate}>{formattedProgress}%</p>
      </div>
    </div>
  );
};

export default CollectionProgress;
