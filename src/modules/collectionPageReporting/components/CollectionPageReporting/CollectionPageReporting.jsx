'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Container, SectionTitle } from '@/shared/components';

import s from './CollectionPageReporting.module.scss';
import CollectionCardList from '../CollectionCardList/CollectionCardList';
import { content } from '../../data/sectionContent';

export default function CollectionPageReporting() {
   const [isTablet, setIsTablet] = useState(false);
let visibleItems=3;
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

visibleItems = isTablet ? 2 : 3;
  return (
    <section>
      <Container>
        <SectionTitle title="Звітність" className={s.title} />
        <CollectionCardList data={content} visibleItems={visibleItems} />
        <div className={s.btnWrapper}>
          <Button variant="secondary" border="true" className={s.button}>
            Всі звіти
          </Button>
        </div>
      </Container>
    </section>
  );
}
