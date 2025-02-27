import { ProgressBar } from '@/shared/components';
import s from './CollectionProgress.module.scss';

const CollectionProgress = ({
  collected,
  target,
  collectedTitle,
  targetTitle,
}) => {
  const progress = (collected / target) * 100;
  const formattedProgress = Math.round(progress);

  return (
    <div className={s.mainProgressContainer}>
      {collected && target && (
        <div className={s.targetContainer}>
          <p className={s.targetText}>
            {collectedTitle}
            <span className={s.counts}>
              {new Intl.NumberFormat('uk-UA').format(collected)} &#x20B4;
            </span>
          </p>
          <p className={s.targetTextRight}>
            {targetTitle}
            <span className={s.counts}>
              {' '}
              {new Intl.NumberFormat('uk-UA').format(target)} &#x20B4;
            </span>
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
