'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import { CustomPagination } from '..';

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
