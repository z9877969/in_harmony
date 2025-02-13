'use client';
import { Container } from '@/shared/components';
import { SectionTitle } from '@/shared/components';
import { CardForSwiperWhithArrow } from '@/shared/components';
import { SwiperWithArrows } from '@/modules/swiperWithArrows';
import s from './MainPageProgress.module.scss';

const MainPageProgress = ({ content }) => {
  return (
    <section className={s.container}>
      <Container>
        <SectionTitle className={s.title} title={content.title} />
        <SwiperWithArrows
          isArrowsShow={true}
          options={{
            dragFree: false,
            loop: false,
            containScroll: 'trimSnaps',
          }}
          slides={content.cards}
          Component={CardForSwiperWhithArrow}
        />
      </Container>
    </section>
  );
};

export default MainPageProgress;
