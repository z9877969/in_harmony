'use client';
import s from './MainPageProgress.module.scss';
import { SectionTitle } from '@/shared/components';
import { content } from '../../data';
import { SwiperWithArrows } from '@/modules/swiperWithArrows';
import { CardForSwiperWhithArrow } from '@/shared/components';
import Container from '@/shared/components/Container/Container';
const MainPageProgress = () => {
  return (
    <Container>
      <section className={s.container}>
        <SectionTitle className={s.title} title="Останні досягнення" />
        <SwiperWithArrows
          options={{
            dragFree: false,
            loop: false,
            containScroll: 'trimSnaps',
          }}
          slides={content}
          Component={CardForSwiperWhithArrow}
        />
      </section>
    </Container>
  );
};

export default MainPageProgress;
