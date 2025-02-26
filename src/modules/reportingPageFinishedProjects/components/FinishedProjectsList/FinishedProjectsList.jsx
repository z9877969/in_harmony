'use client';
import { CardProjectReporting } from '@/shared/components';
import s from './FinishedProjectsList.module.scss';
import { useEffect, useState } from 'react';

export default function FinishedProjectsList({ data }) {
  const [isDesktop, setIsDesktop] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(4);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      setIsDesktop(width >= 1440);
      setCurrentIndex(width >= 1440 ? 6 : 4);

      const handleResize = () => {
        const width = window.innerWidth;
        setIsDesktop(width >= 1440);
        setCurrentIndex(width >= 1440 ? 6 : 4);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  if (isDesktop === null) {
    return <div>Loading...</div>;
  }

  const handleClick = () => {
    if (isDesktop && currentIndex <= data.length) {
      setCurrentIndex((prevState) => prevState + 3);
    } else if (!isDesktop && currentIndex <= data.length) {
      setCurrentIndex((prevState) => prevState + 2);
    } else {
      setCurrentIndex(data.length);
    }
  };
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
      <div className={s.btnWrapper}>
        {/* <Button
          variant="secondary"
          border="true"
          className={s.button}
          onClick={handleClick}
        >
          {t('showMore')}
        </Button> */}
      </div>
    </div>
  );
}
