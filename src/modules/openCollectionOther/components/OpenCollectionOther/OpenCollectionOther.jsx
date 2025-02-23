'use client';

import { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import {
  ActiveCollectionsCard,
  Container,
  DotsSwiper,
  SectionTitle,
} from '@/shared/components';
import other_collection from '../../data/section-content.json';
import s from './OpenCollectionOther.module.scss';

const OpenCollectionOther = ({ content, id }) => {
  const [visibleItems, setVisibleItems] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  const otherCollections = content.cards.filter((card) => card._id !== id);

  useEffect(() => {
    const handleResize = (collections) => {
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
    handleResize(otherCollections);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [otherCollections]);

  return (
    <section className={s.section}>
      {otherCollections && (
        <Container>
          <SectionTitle title={content.title} className={s.title} />
          <div>
            <DotsSwiper
              customSwiper={s.customSwiper}
              totalSlides={totalSlides}
              slideCount={visibleItems}
              spaceBetween={24}
            >
              {otherCollections.map((collection) => (
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
      )}
    </section>
  );
};

export default OpenCollectionOther;
