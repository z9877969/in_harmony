import { Icon } from '@/shared/components';
import { ProgressBar } from '@/shared/components';
import s from './OpenCollectionProgress.module.scss';
import sectionContent from '../../data/sectionContent.json';
const OpenCollectionProgress = ({ data }) => {
  const progress = (data.collected / data.target) * 100;
  const formattedProgress = Math.round(progress);
  return (
    <div>
      <div className={s.title}>
        <p>{data.collected_title}</p>
        <p>{data.target_title}</p>
      </div>
      <div className={s.amount}>
        <p>{Number(data.collected).toLocaleString('uk-UA')} &#x20B4;</p>
        <p>{Number(data.target).toLocaleString('uk-UA')} &#x20B4;</p>
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
        <Icon
          className={s.icon}
          iconName={sectionContent.progress.donors.icon}
        />
        <p>
          {data.peopleDonate} {data.peopleDonate_title}
        </p>
      </div>
    </div>
  );
};

export default OpenCollectionProgress;
