import { Container, Section } from '@/shared/components';
import { SectionTitle } from '@/shared/components';
import { CardForSwiperWhithArrow } from '@/shared/components';
import { SwiperWithArrows } from '@/modules/swiperWithArrows';
import s from './MainPageProgress.module.scss';
import { Suspense } from 'react';

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
        >
          <Suspense fallback={null}>
            {content.cards.map((card) => (
              <CardForSwiperWhithArrow key={card._id} card={card} />
            ))}
          </Suspense>
        </SwiperWithArrows>
      </Container>
    </Section>
  );
};

export default MainPageProgress;
