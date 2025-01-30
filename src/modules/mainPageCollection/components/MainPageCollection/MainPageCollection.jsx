'use client';

import s from './MainPageCollection.module.scss';
import 'swiper/css';
import { useEffect, useState } from 'react';
import ActiveCollectionList from '../ActiveCollectionList/ActiveCollectionList';
import collections from '../../data/collections.json';
import ActiveCollectionsCard from '../ActiveCollectionsCard/ActiveCollectionsCard';
import { SwiperSlide } from 'swiper/react';
import DotsSwiper from '../../../../shared/components/DotsSwiper/DotsSwiper';
import Button from '@/shared/components/Button/Button';
import { useRouter } from 'next/navigation';
import { Container } from '@/shared/components';

const MainPageCollection = () => {
  const [isTablet, setIsTablet] = useState(false);
  const [visibleItems] = useState(3);
  const router = useRouter();

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

  const totalSlides = 2;

  return (
    <section className={s.collectionSection}>
      <Container>
        <div className={s.mainContainer}>
          <h2 className={s.title}>Активні збори</h2>
          <div>
            {isTablet ? (
              <DotsSwiper
                visibleItems={visibleItems}
                customSwiper={s.customSwiper}
                totalSlides={totalSlides}
                slideCount={2}
                spaceBetween={24}
              >
                {collections.slice(0, visibleItems).map((collection) => (
                  <SwiperSlide key={collection._id}>
                    <ActiveCollectionsCard collection={collection} />
                  </SwiperSlide>
                ))}
              </DotsSwiper>
            ) : (
              <ActiveCollectionList
                visibleItems={visibleItems}
                collection={collections}
              />
            )}
          </div>
          <Button
            onClick={() => router.push('/all-collections')}
            border="true"
            className={s.desktopButton}
            size="large"
            fontSize="eighteen"
          >
            Всі збори
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default MainPageCollection;
