import React from 'react';
import s from './ProgressBur.module.scss';

const ProgressBar = ({ collected, target }) => {
  const progress = (collected / target) * 100;

  return (
    <div className={s.mainProgressContainer}>
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
      <div className={s.progressContainer}>
        <div className={s.progressBarContainer}>
          <div
            className={s.progressBar}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className={s.rate}>{progress}%</p>
      </div>
    </div>
  );
};

export default ProgressBar;

// const ProgressBar = ({ progress }) => {
//   const roundedProgress = Math.min(Math.ceil(progress / 25) * 25, 100);

//   return (
//     <div className={s.progressBarContainer]}>
//       <div
//         className={s.progressBar}
//         data-progress={roundedProgress}
//       ></div>
//     </div>
//   );
// };

// export default ProgressBar;
