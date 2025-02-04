import s from './ProgressBar.module.scss';
import clsx from 'clsx';
const ProgressBar = ({ progress, className, progressLine }) => {
  return (
    <div className={clsx(s.progressBarContainer, className)}>
      <div
        className={clsx(s.progressBar, progressLine)}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
