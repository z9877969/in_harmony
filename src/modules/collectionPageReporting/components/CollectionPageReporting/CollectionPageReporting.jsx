'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { Container, SectionTitle } from '@/shared/components';

import s from './CollectionPageReporting.module.scss';
import CollectionCardList from '../CollectionCardList/CollectionCardList';

import { ROUTES } from '@/shared/constants';
import Link from 'next/link';

export default function CollectionPageReporting({ content }) {
  const [isTablet, setIsTablet] = useState(false);

  const visibleItems = isTablet ? 2 : 3;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width < 1440);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section>
      <Container>
        <SectionTitle title={content.title} className={s.title} />
        <CollectionCardList data={content.cards} visibleItems={visibleItems} />
        <div className={s.linkWrapper}>
          <Link href={ROUTES.REPORTING} className={s.link}>
            Всі звіти
          </Link>
        </div>
      </Container>
    </section>
  );
}
