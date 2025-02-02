'use client';
import React from 'react';
import { Button, Container, SectionTitle } from '@/shared/components';
import { SwiperWithArrows } from '@/modules/swiperWithArrows';
import ReportingCard from '../ReportingCard/ReportingCard';
import s from './CollectionPageReporting.module.scss';
import { content } from '../../data/sectionContent';

export default function CollectionPageReporting() {
  return (
    <section>
      <Container>
        <SectionTitle title="Звітність" className={s.title} />
        <SwiperWithArrows
          className={s.container}
          classEmbla={s.embla}
          isArrowsShow={false}
          options={{
            dragFree: false,
            loop: false,
            containScroll: 'trimSnaps',
          }}
          slides={content}
          Component={ReportingCard}
        />
        <div className={s.btnWrapper}>
          <Button variant="secondary" border="true" className={s.button}>
            Всі звіти
          </Button>
        </div>
      </Container>
    </section>
  );
}
