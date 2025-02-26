'use client';
import { CardProjectReporting } from '@/shared/components';
import s from './FinishedProjectsList.module.scss';
import { useCurrentIndexWithIsDesktop } from '../../hooks/useCurrentIndexWithIsDesktop.js';

export default function FinishedProjectsList({ data, contentLength }) {
  const { currentIndex } = useCurrentIndexWithIsDesktop(contentLength);

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
