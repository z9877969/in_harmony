import React from 'react';

import s from './CardProjectReporting.module.scss';
import LinkButton from '../LinkButton/LinkButton';

export default function CardProjectReporting({ slid }) {
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
            path={`/collection/closed/${id}`}
            className={s.button}
            linkText={'Детальніше'}
          />
        </div>
      </div>
    </div>
  );
}
