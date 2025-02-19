'use client';

import React from 'react';

import { usePathname } from 'next/navigation.js';

import LinkButton from '../LinkButton/LinkButton';
import { ROUTES } from '@/shared/constants';

import data from '../CardProjectReporting/data/sectionContent.json';

import s from './CardProjectReporting.module.scss';
import Image from 'next/image.js';

export default function CardProjectReporting({ slid }) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  const {
    id,
    image,
    alt,
    title,
    collected_title,
    target,
    currency,
    term,
    days,
    period,
    comments,
    quantity,
  } = slid;
  comments;

  const dataProps = {
    imageUrl: image[0],
  };

  return (
    <div className={s.list}>
      <div className={s.slide}>
        <Image
          className={s.imgBlock}
          src={dataProps.imageUrl}
          alt={alt}
          width={292}
          height={234}
        />

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
            <span>{quantity}</span>
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
