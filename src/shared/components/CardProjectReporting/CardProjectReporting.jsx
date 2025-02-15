import React from 'react';

import s from './CardProjectReporting.module.scss';
import LinkButton from '../LinkButton/LinkButton';
import Image from 'next/image';

export default function CardProjectReporting({ slid }) {
  const {
    alt,
    collected,
    collected_title,
    comments,
    currency,
    days,
    image,
    peopleDonate,
    period,
    quantity,
    term,
    title,
    _id,
  } = slid;
  comments;
  return (
    <div className={s.list}>
      <div className={s.slide}>
        <Image
          width={350}
          height={290}
          alt={alt}
          src={image && image[0]}
          className={s.imgBlock}
        />

        <div className={s.wrapper}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.text}>
            <span className={s.preTitle}>{collected_title}:</span>
            &#8197;
            <span>{collected}</span> &#8197;
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
            <span>{quantity ? quantity : peopleDonate}</span>
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
