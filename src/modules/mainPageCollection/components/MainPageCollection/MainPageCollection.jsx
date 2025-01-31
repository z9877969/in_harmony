'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SwiperSlide } from 'swiper/react';
import { Button, Container, DotsSwiper } from '@/shared/components';
import { ActiveCollectionList } from '@/modules/mainPageCollection';
import { collections } from '@/modules/mainPageCollection';
import { ActiveCollectionsCard } from '@/modules/mainPageCollection';
import s from './MainPageCollection.module.scss';

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
