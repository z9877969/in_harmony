'use client';
import { CardProjectReporting } from '@/shared/components';
import s from './CollectionCardList.module.scss';
import { useEffect, useState } from 'react';

export default function CollectionCardList({ data }) {
  const [isTablet, setIsTablet] = useState(false);
  const visibleItems = isTablet ? 2 : 3;
  const { cards } = data;
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width < 1440);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={s.main}>
      <div className={s.container}>
        {cards.slice(0, visibleItems).map((slid) => (
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
