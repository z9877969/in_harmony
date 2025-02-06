import { CardProjectReporting } from '@/shared/components';
import s from './FinishedProjectsList.module.scss';

export default function FinishedProjectsList({ data, currentIndex }) {
  return (
    <div className={s.main}>
      <div className={s.container}>
        {data.slice(0, currentIndex).map((slid) => (
          <CardProjectReporting
            slid={slid}
            key={slid.id}
            className={s.listItem}
          />
        ))}
      </div>
    </div>
  );
}
