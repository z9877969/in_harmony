import React from 'react';
import s from './ProgressBar.module.scss';

const ProgressBar = ({ collected, target }) => {
  const progress = (collected / target) * 100;
  const formattedProgress = Math.round(progress);

  return (
    <div className={s.mainProgressContainer}>
      {collected && target && (
        <div className={s.targetContainer}>
          <p className={s.targetText}>
            Зібрано
            <span className={s.counts}>{collected} ₴</span>
          </p>
          <p className={s.targetText}>
            Ціль
            <span className={s.counts}>{target} ₴</span>
          </p>
        </div>
      )}
      <div className={s.progressContainer}>
        <div className={s.progressBarContainer}>
          <div
            className={s.progressBar}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className={s.rate}>{formattedProgress}%</p>
      </div>
    </div>
  );
};

export default ProgressBar;
