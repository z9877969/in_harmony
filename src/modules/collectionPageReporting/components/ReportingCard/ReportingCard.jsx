import React from 'react';

import s from './ReportingCard.module.scss';
import { Button } from '@/shared/components';

export default function ReportingCard({ slid }) {
  const {
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
        <Button
          border="true"
          variant="secondary"
          className={s.button}
          size="large"
        >
          Детальніше
        </Button>
      </div>
    </div>
  );
}
