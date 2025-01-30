import React, { useState } from 'react';
import { Swiper } from 'swiper/react';
import CustomPagination from './CustomPagination/CustomPagination';
import clsx from 'clsx';

const DotsSwiper = ({
  customSwiper,
  children,
  totalSlides,
  slideCount,
  spaceBetween,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <Swiper
        className={clsx(customSwiper)}
        spaceBetween={spaceBetween}
        slidesPerView={slideCount}
        // breakpoints={{
        //   768: {
        //     slidesPerView: 2,
        //   },
        // }}
        onSlideChange={handleSlideChange}
      >
        {children}
      </Swiper>

      <CustomPagination
        totalSlides={totalSlides}
        currentSlide={currentSlide}
        goToSlide={goToSlide}
      />
    </>
  );
};

export default DotsSwiper;
