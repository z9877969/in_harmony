'use client';

import React from 'react';

import { usePathname } from 'next/navigation.js';

import LinkButton from '../LinkButton/LinkButton';
import { ROUTES } from '@/shared/constants';

import data from '../CardProjectReporting/data/sectionContent.json';

import s from './CardProjectReporting.module.scss';
// import { useTranslation } from 'react-i18next';

export default function CardProjectReporting({ slid }) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
<<<<<<< HEAD
  //   const { t } = useTranslation();
=======

>>>>>>> db29ee6cd2d8a751d41d61d8e2d53695c4e527e1
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
            path={`/${locale}/${ROUTES.COLLECTION}/${ROUTES.CLOSED}/${id}`}
            className={s.button}
            linkText={data.linkButtonDetails}
          />
        </div>
      </div>
    </div>
  );
}
