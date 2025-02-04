'use client';

import { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import {
  ActiveCollectionsCard,
  Container,
  DotsSwiper,
  Section,
  SectionTitle,
} from '@/shared/components';
import other_collection from '../../data/section-content.json';
import s from './OpenCollectionOther.module.scss';

const OpenCollectionOther = () => {
  const [visibleItems, setVisibleItems] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  const collections = other_collection.collections;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let itemsPerPage = 1;
      let slidesCount = collections.length;

      if (width >= 1440) {
        itemsPerPage = 3;
        slidesCount = Math.ceil(collections.length) - 2;
      } else if (width > 767) {
        itemsPerPage = 2;
        slidesCount = Math.ceil(collections.length) - 1;
      }

      setVisibleItems(itemsPerPage);
      setTotalSlides(slidesCount > 0 ? slidesCount : 1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [collections.length]);

  return (
    <Section className={s.section}>
      <Container>
        <SectionTitle title={other_collection.title} className={s.title} />
        <div>
          <DotsSwiper
            customSwiper={s.customSwiper}
            totalSlides={totalSlides}
            slideCount={visibleItems}
            spaceBetween={24}
          >
            {collections.map((collection) => (
              <SwiperSlide key={collection._id}>
                <ActiveCollectionsCard
                  collection={collection}
                  buttonDetails={other_collection.button_details}
                  buttonDonas={other_collection.button_donas}
                />
              </SwiperSlide>
            ))}
          </DotsSwiper>
        </div>
      </Container>
    </Section>
  );
};

export default OpenCollectionOther;
