'use client';

import { Container, DotsSwiper, Section } from '@/shared/components';
import s from './ClosedCollectionFeedbacks.module.scss';
// import comments from '../../data/section-content.json';
import { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import CollectionFeedbacksCard from '../CollectionFeedbacksCard/CollectionFeedbacksCard';

const ClosedCollectionFeedbacks = ({ content }) => {
  const [visibleItems, setVisibleItems] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let itemsPerPage = 1;
      let slidesCount = content.cards.length;

      if (width >= 1440) {
        itemsPerPage = 3;
        slidesCount = Math.ceil(content.cards.length) - 2;
      } else if (width > 767) {
        itemsPerPage = 1.5;
        slidesCount = Math.ceil(content.cards.length) - 1;
      }

      setVisibleItems(itemsPerPage);
      setTotalSlides(slidesCount > 0 ? slidesCount : 1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [content]);

  return (
    <Section>
      <Container>
        <DotsSwiper
          customSwiper={s.customSwiper}
          totalSlides={totalSlides}
          slideCount={visibleItems}
          spaceBetween={24}
        >
          {content.cards.map((comment) => (
            <SwiperSlide key={comment._id}>
              <CollectionFeedbacksCard comment={comment} />
            </SwiperSlide>
          ))}
        </DotsSwiper>
      </Container>
    </Section>
  );
};

export default ClosedCollectionFeedbacks;
