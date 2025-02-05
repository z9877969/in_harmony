'use client';
import { Container } from '@/shared/components';
import { SectionTitle } from '@/shared/components';
import { CardForSwiperWhithArrow } from '@/shared/components';
import { SwiperWithArrows } from '@/modules/swiperWithArrows';
import { content } from '../../data/sectionContent';
import s from './MainPageProgress.module.scss';

const MainPageProgress = () => {
  return (
    <section className={s.container}>
      <Container>
        <SectionTitle className={s.title} title="Останні досягнення" />
        <SwiperWithArrows
          isArrowsShow={true}
          options={{
            dragFree: false,
            loop: false,
            containScroll: 'trimSnaps',
          }}
          slides={content}
          Component={CardForSwiperWhithArrow}
        />
      </Container>
    </section>
  );
};

export default MainPageProgress;
