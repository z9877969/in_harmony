import dynamic from 'next/dynamic';

import { Container } from '@/shared/components';
const AboutPagePartnersCarousel = dynamic(
  () => import('../AboutPagePartnersCarousel/AboutPagePartnersCarousel'),
  { ssr: false }
);

import s from './AboutPagePartners.module.scss';

const AboutPagePartners = ({ content }) => {
  return (
    <section className={s.partnersSection}>
      <Container>
        <div className={s.mainContainer}>
          <div className={s.textContainer}>
            <h2 className={s.title}>{content.title}</h2>
            <p className={s.desc}>{content.desc}</p>
          </div>
        </div>
      </Container>
      <AboutPagePartnersCarousel cards={content.cards} />
    </section>
  );
};

export default AboutPagePartners;
