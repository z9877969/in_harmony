'use client';

import Link from 'next/link.js';
import { useTranslation } from 'react-i18next';

import { useLoadMore } from '../../hooks/useLoadMore.js';
import ButtonReportingPageFilters from '../ButtonReportingPageFilters/ButtonReportingPageFilters.jsx';
import { Icon } from '@/shared/components/index.js';

import s from './Feedbacks.module.scss';

const Feedbacks = ({ content }) => {
  const { t } = useTranslation('reportingPage');
  const monthNames = t('monthNames', { returnObjects: true });
  const { cards } = content;
  cards.sort((a, b) => {
    if (a.year === b.year) {
      return monthNames.indexOf(b.month) - monthNames.indexOf(a.month);
    }
    return b.year - a.year;
  });

  const { items, handleLoadMore, hasMore } = useLoadMore(5, cards.length);

  const visibleItems = cards.slice(0, items);

  return (
    <>
      <div className={s.boxReporting}>
        <ul className={s.list}>
          {visibleItems.map((item) => (
            <li key={item.id}>
              <Link href={item.url} className={s.linkFeedbacks} target="_blank">
                <p>
                  {item.month} {item.year}
                </p>
                <Icon
                  iconName="icon-arrow-right-circle"
                  width="24"
                  height="24"
                  className={s.iconFeedbacks}
                />
              </Link>
            </li>
          ))}
        </ul>
        <ButtonReportingPageFilters
          handleLoadMore={handleLoadMore}
          hasMore={hasMore}
        />
      </div>
    </>
  );
};

export default Feedbacks;
