'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { NextButton, PrevButton } from '../ArrowButtons/ArrowButtons';
import { DotButton } from '../DotButton/DotButton';
import { usePrevNextButtons } from '../../hooks/usePrevNextButtons';
import { useDotButton } from '../../hooks/useDotButton';
import s from './SwiperWhithArrows.module.scss';

const SwiperWithArrows = (props) => {
  const { slides, Component, options, className, isArrowsShow, classEmbla } =
    props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={`${s.embla} ${classEmbla}`}>
      <div className={s.embla__viewport} ref={emblaRef}>
        <div className={`${s.container} ${className}`}>
          {slides.map((slid) => (
            <Component slid={slid} key={slid._id} />
          ))}
        </div>
      </div>
      <div className={s.controls}>
        <div className={s.buttons}>
          {isArrowsShow && (
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
          )}
          <div className={s.dots}>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                active={index === selectedIndex}
              />
            ))}
          </div>
          {isArrowsShow && (
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default SwiperWithArrows;
