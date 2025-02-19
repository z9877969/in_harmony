'use client';
import { Container, Section } from '@/shared/components';
import { SectionTitle } from '@/shared/components';
import { CardForSwiperWhithArrow } from '@/shared/components';
import { SwiperWithArrows } from '@/modules/swiperWithArrows';
import s from './MainPageProgress.module.scss';

const MainPageProgress = ({ content }) => {
  return (
    <Section>
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
    </Section>
  );
};

export default MainPageProgress;
