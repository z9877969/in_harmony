'use client';

import { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import {
  ActiveCollectionsCard,
  Container,
  DotsSwiper,
  SectionTitle,
} from '@/shared/components';
import { ActiveCollectionList } from '@/modules/mainPageCollection';
import ActiveCollectionPageNavBtn from '../ActiveCollectionPageNavBtn/ActiveCollectionPageNavBtn';
import s from './MainPageCollection.module.scss';

const MainPageCollection = ({ content }) => {
  const [isTablet, setIsTablet] = useState(false);
  const [visibleItems] = useState(3);

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
    <Container>
      <section className={s.collectionSection}>
        <SectionTitle title={content.title} className={s.title} />
        <div>
          {isTablet ? (
            <DotsSwiper
              visibleItems={visibleItems}
              customSwiper={s.customSwiper}
              totalSlides={totalSlides}
              slideCount={2}
              spaceBetween={24}
            >
              {content.cards?.slice(0, visibleItems).map((collection) => (
                <SwiperSlide key={collection._id}>
                  <ActiveCollectionsCard collection={collection} />
                </SwiperSlide>
              ))}
            </DotsSwiper>
          ) : (
            <ActiveCollectionList
              visibleItems={visibleItems}
              allCollection={content.cards}
            />
          )}
        </div>
        <ActiveCollectionPageNavBtn className={s.desktopButton} />
      </section>
    </Container>
  );
};

export default MainPageCollection;
