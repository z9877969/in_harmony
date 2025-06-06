'use client';
import { CardProjectReporting } from '@/shared/components';
import s from './FinishedProjectsList.module.scss';

export default function FinishedProjectsList({ data }) {
  return (
    <div className={s.main}>
      <div className={s.container}>
        {data.map((slid) => (
          <CardProjectReporting
            slid={slid}
            key={slid._id}
            className={s.listItem}
          />
        ))}
      </div>
    </div>
  );
}
