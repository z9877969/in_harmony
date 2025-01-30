import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomPagination from '../CustomPagination/CustomPagination';
import clsx from 'clsx';
import { ACTIVE_COLLECTION_LIST } from '../data';
import ActiveCollectionsCard from '../ActiveCollectionsCard/ActiveCollectionsCard';

const ActiveCollectionSwiper = ({
  onSlideChange,
  currentSlide,
  goToSlide,
  visibleItems,
  customSwiper,
}) => {
  return (
    <div>
      <Swiper
        className={clsx(customSwiper)}
        spaceBetween={24}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        onSlideChange={onSlideChange}
      >
        {ACTIVE_COLLECTION_LIST.slice(0, visibleItems).map((collection) => (
          <SwiperSlide key={collection._id}>
            <ActiveCollectionsCard collection={collection} />
          </SwiperSlide>
        ))}
      </Swiper>

      <CustomPagination
        totalSlides={2}
        currentSlide={currentSlide}
        goToSlide={goToSlide}
      />
    </div>
  );
};

export default ActiveCollectionSwiper;
