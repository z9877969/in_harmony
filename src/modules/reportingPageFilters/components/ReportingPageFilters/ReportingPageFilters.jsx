'use client';

import { Button, Container } from '@/shared/components';

import { Feedbacks } from '../../index.js';

import { useLoadMore } from '../hooks/useLoadMore.js';

import data from '../../data/sectionContent.json';

import s from './ReportingPageFilters.module.scss';

const ReportingPageFilters = () => {
  const { items, handleLoadMore, hasMore } = useLoadMore(
    5,
    data.reporting.length
  );

  const visibleItems = data.reporting.slice(0, items);
  return (
    <section className={s.section}>
      <Container>
        <h1 className={s.title}>{data.title}</h1>
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
          {hasMore && (
            <Button
              size="border"
              className={s.btnReporting}
              onClick={handleLoadMore}
            >
              {data.textBtn}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ReportingPageFilters;
