import { Icon } from '@/shared/components';
import { ProgressBar } from '@/shared/components';
import s from './OpenCollectionProgress.module.scss';
import clsx from 'clsx';

const OpenCollectionProgress = ({ data }) => {
  const progress = (data.collected / data.target) * 100;
  const formattedProgress = Math.round(progress);
  return (
    <div>
      <div className={s.donors}>
        <Icon className={s.icon} iconName={'icon-people'} />
        <p>
          {data.peopleDonate} {data.peopleDonate_title}
        </p>
      </div>
      <div className={s.progressContainer}>
        <ProgressBar
          progress={progress}
          className={s.bar}
          progressLine={clsx(
            s.progressLine,
            data.status === 'active' && s.activeProgressBar
          )}
        />
        <p className={s.progreessBarText}>
          {data.collected_title}:<span>{formattedProgress}%</span>
        </p>
      </div>
      <div className={s.title}>
        <p>{data.collected_title}</p>
        <p>{data.target_title}</p>
      </div>
      <div
        className={clsx(
          s.amount,
          data.status === 'active' && s.activeProgressAmount
        )}
      >
        <p>{Number(data.collected).toLocaleString('uk-UA')} &#x20B4;</p>
        <p>{Number(data.target).toLocaleString('uk-UA')} &#x20B4;</p>
      </div>
    </div>
  );
};

export default OpenCollectionProgress;
