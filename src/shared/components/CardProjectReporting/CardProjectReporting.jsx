'use client';

import React from 'react';

import { usePathname } from 'next/navigation.js';

import LinkButton from '../LinkButton/LinkButton';
import { LINKDATA, ROUTES } from '@/shared/constants';

import s from './CardProjectReporting.module.scss';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function CardProjectReporting({ slid }) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const { t } = useTranslation('closedCollectionPage');
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
    image,
  } = slid;

  return (
    <div className={s.list}>
      <div className={s.slide}>
        <div className={s.overlay}>
          <Image
            className={s.image}
            src={image && image[0]}
            alt={title + 'image'}
            height={400}
            width={400}
            priority
            placeholder="blur"
            blurDataURL="/images/blur-placeholder.jpg"
          />
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
        </div>
        <div className={s.btnWrapper}>
          <LinkButton
            path={`/${locale}/${ROUTES.COLLECTION}/${ROUTES.CLOSED}/${_id}`}
            linkText={t('button_details')}
            type={LINKDATA.TYPE_LIGHT_BORDER}
          />
        </div>
      </div>
    </div>
  );
}
