'use client';

import React, { useRef, useState } from 'react';
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
  const swiperRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    swiperRef.current?.swiper.slideTo(index);
  };

  return (
    <>
      <Swiper
        ref={swiperRef}
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
