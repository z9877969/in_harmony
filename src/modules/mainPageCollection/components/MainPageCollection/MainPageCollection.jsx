'use client';

import s from './MainPageCollection.module.scss';
import 'swiper/css';
import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
import CollectionList from '../ActiveCollectionList/ActiveCollectionList';
import CollectionSwiper from '../ActiveCollectionSwiper/ActiveCollectionSwiper';

const MainPageCollection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTablet, setIsTablet] = useState(false);
  const [visibleItems, setVisibleItems] = useState(3);
  // const router = useRouter();

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

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section>
      <div className={s.mainContainer}>
        <h2 className={s.title}>Активні збори</h2>
        {isTablet ? (
          <>
            <CollectionSwiper
              onSlideChange={handleSlideChange}
              currentSlide={currentSlide}
              goToSlide={goToSlide}
              visibleItems={visibleItems}
              customSwiper={s.customSwiper}
            />
          </>
        ) : (
          <CollectionList visibleItems={visibleItems} />
        )}
      </div>
    </section>
  );
};

export default MainPageCollection;
