'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import s from './MainPageCollection.module.scss';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CustomPagination from '../CustomPagination/CustomPagination';
import { ACTIVE_COLLECTION_LIST } from '../constants';
import CollectionsCard from '../CollectionsCard/CollectionsCard';

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
            <Swiper
              className={s.customSwiper}
              spaceBetween={24}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              onSlideChange={handleSlideChange}
            >
              {ACTIVE_COLLECTION_LIST.slice(0, visibleItems).map(
                (collection) => (
                  <SwiperSlide key={collection._id}>
                    <CollectionsCard collection={collection} />
                  </SwiperSlide>
                )
              )}
            </Swiper>
            {isTablet && (
              <CustomPagination
                totalSlides={2}
                currentSlide={currentSlide}
                goToSlide={goToSlide}
              />
            )}
          </>
        ) : (
          <>
            <ul className={s.collectionList}>
              {ACTIVE_COLLECTION_LIST.slice(0, visibleItems).map(
                (collection) => (
                  <li key={collection._id}>
                    <CollectionsCard collection={collection} />
                  </li>
                )
              )}
            </ul>
          </>
        )}
        {/* <div className={s.buttonContainer}>
          <button
            onClick={() => router.push('/all-collection')}
            className={s.showMoreBtn}
          >
            Всі збори
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default MainPageCollection;
