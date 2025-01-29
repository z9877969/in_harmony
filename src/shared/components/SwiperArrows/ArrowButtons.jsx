'use client';
import React, { useCallback, useEffect, useState } from 'react';
import s from './SwiperArrows.module.scss';

export const usePrevNextButtons = (emblaApi, onButtonClick) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, disabled, ...restProps } = props;

  return (
    <button
      type="button"
      {...restProps}
      className={disabled ? `${s.btnDisabled}` : `${s.btnEnabled}`}
    >
      <svg width="18" height="14" fill="none">
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16.5 7h-15m0 0 5.625 6M1.5 7l5.625-6"
        />
      </svg>
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, disabled, ...restProps } = props;

  return (
    <button
      type="button"
      {...restProps}
      className={disabled ? `${s.btnDisabled}` : `${s.btnEnabled}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="14"
        fill="none"
      >
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1.5 7h15m0 0-5.625-6M16.5 7l-5.625 6"
        />
      </svg>
      {children}
    </button>
  );
};
