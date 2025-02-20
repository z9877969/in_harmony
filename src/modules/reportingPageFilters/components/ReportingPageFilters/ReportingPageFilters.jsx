'use client';

import { Button, Container } from '@/shared/components';

import { Feedbacks } from '../../index.js';

import { useLoadMore } from '../hooks/useLoadMore.js';

// import data from '../../data/sectionContent.json';

import s from './ReportingPageFilters.module.scss';
import { useTranslation } from 'react-i18next';

const ReportingPageFilters = ({ content }) => {
  const { t } = useTranslation('reportingPage');
  const { cards } = content;

  const monthOrder = [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень',
  ];

  cards.sort((a, b) => {
    if (a.year === b.year) {
      return monthOrder.indexOf(b.month) - monthOrder.indexOf(a.month);
    }
    return b.year - a.year;
  });

  cards.sort((a, b) => {
    const dateA = new Date(`${a.year}-${a.month}-01`);
    const dateB = new Date(`${b.year}-${b.month}-01`);
    return dateB - dateA;
  });

  const { items, handleLoadMore, hasMore } = useLoadMore(5, cards.length);

  const visibleItems = cards.slice(0, items);
  return (
    <section className={s.section}>
      <Container>
        <h1 className={s.title}>{content.title}</h1>
        <div className={s.boxReporting}>
          <ul className={s.list}>
            {visibleItems.map((item) => (
              <li key={item.id}>
                <Feedbacks href={item.url}>
                  {item.month} {item.year}
                </Feedbacks>
              </li>
            ))}
          </ul>

          <Button
            size="border"
            className={s.btnReporting}
            onClick={handleLoadMore}
          >
            {hasMore ? t('textBtn') : t('textBtnClose')}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ReportingPageFilters;
