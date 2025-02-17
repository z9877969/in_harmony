import React from 'react';

import s from './CardProjectReporting.module.scss';
import LinkButton from '../LinkButton/LinkButton';
// import { ActiveCollectionsCard, DotsSwiper } from '@/shared/components';
// import { SwiperSlide } from 'swiper/react';

export default function CardProjectReporting({ slid }) {
  const {
    _id,
    title,
    collected_title,
    target,
    currency,
    term,
    days,
    period,
    comments,
    quantity,
    //  image,
  } = slid;

  return (
    <div className={s.list}>
      <div className={s.slide}>
        <div className={s.imgBlock}>
          {/* <DotsSwiper
            customSwiper={s.customSwiper}
            totalSlides={3}
            slideCount={2}
          >
            {image.map((el, idx) => (
              <SwiperSlide key={idx}>
                <ActiveCollectionsCard collection={el} />
              </SwiperSlide>
            ))}
          </DotsSwiper> */}
        </div>

        <div className={s.wrapper}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.text}>
            <span className={s.preTitle}>{collected_title}</span>
            &#8197;
            <span>{target}</span> &#8197;
            <span>{currency}</span>
          </p>
          <p className={s.text}>
            <span className={s.preTitle}>{term}</span>
            &#8197;
            {days} &#8197;
            {period}
          </p>
          <p className={s.text}>
            <span className={s.preTitle}>{comments}</span>
            &#8197;
            <span>{quantity ? quantity : 'Немає'}</span>
          </p>
        </div>
        <div className={s.btnWrapper}>
          <LinkButton
            path={`/collection/closed/${_id}`}
            className={s.button}
            linkText={'Детальніше'}
          />
        </div>
      </div>
    </div>
  );
}
