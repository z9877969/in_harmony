'use client';

import React from 'react';

import { usePathname } from 'next/navigation.js';

import LinkButton from '../LinkButton/LinkButton';
import { ROUTES } from '@/shared/constants';

import data from '../CardProjectReporting/data/sectionContent.json';

import s from './CardProjectReporting.module.scss';

export default function CardProjectReporting({ slid }) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  const {
    id,
    title,
    item,
    total,
    currency,
    term,
    days,
    period,
    comments,
    quantity,
  } = slid;
  comments;
  return (
    <div className={s.list}>
      <div className={s.slide}>
        <div className={s.imgBlock}></div>

        <div className={s.wrapper}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.text}>
            <span className={s.preTitle}>{item}</span>
            &#8197;
            <span>{total}</span> &#8197;
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
