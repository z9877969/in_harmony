'use client';

import { Container, DotsSwiper, Section } from '@/shared/components';
import s from './ClosedCollectionFeedbacks.module.scss';
import comments from '../../data/section-content.json';
import { useEffect, useState } from 'react';
import CollectionFeedbacksSlide from '../CollectionFeedbacksSlide/CollectionFeedbacksSlide';
import { SwiperSlide } from 'swiper/react';
import CollectionFeedbacksCard from '../CollectionFeedbacksCard/CollectionFeedbacksCard';

const ClosedCollectionFeedbacks = () => {
  const [visibleItems, setVisibleItems] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let itemsPerPage = 1;
      let slidesCount = comments.length;

      if (width >= 1440) {
        itemsPerPage = 3;
        slidesCount = Math.ceil(comments.length) - 2;
      } else if (width > 767) {
        itemsPerPage = 2;
        slidesCount = Math.ceil(comments.length) - 1;
      }

      setVisibleItems(itemsPerPage);
      setTotalSlides(slidesCount > 0 ? slidesCount : 1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Section>
      <Container>
        <DotsSwiper
          customSwiper={s.customSwiper}
          totalSlides={totalSlides}
          slideCount={visibleItems}
          spaceBetween={24}
        >
          {comments.map((comment) => (
            <SwiperSlide key={comment._id} className={s.listItem}>
              <CollectionFeedbacksCard comment={comment} />
            </SwiperSlide>
          ))}
        </DotsSwiper>
      </Container>
    </Section>
  );
};

export default ClosedCollectionFeedbacks;
