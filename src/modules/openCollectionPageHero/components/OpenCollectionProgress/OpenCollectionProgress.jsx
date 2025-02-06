import { Icon } from '@/shared/components';
import { ProgressBar } from '@/shared/components';
import s from './OpenCollectionProgress.module.scss';

const OpenCollectionProgress = ({ data }) => {
  const progress = (data.collected.amount / data.target.amount) * 100;
  const formattedProgress = Math.round(progress);
  return (
    <div>
      <div className={s.title}>
        <p>{data.collected.title}</p>
        <p>{data.target.title}</p>
      </div>
      <div className={s.amount}>
        <p>{Number(data.collected.amount).toLocaleString('uk-UA')} &#x20B4;</p>
        <p>{Number(data.target.amount).toLocaleString('uk-UA')} &#x20B4;</p>
      </div>
      <div className={s.progressContainer}>
        <ProgressBar
          progress={progress}
          className={s.bar}
          progressLine={s.progressLine}
        />
        <p>{formattedProgress}%</p>
      </div>
      <div className={s.donors}>
        <Icon className={s.icon} iconName={data.donors.icon} />
        <p>
          {data.donors.amount} {data.donors.title}
        </p>
      </div>
    </div>
  );
};

export default OpenCollectionProgress;
