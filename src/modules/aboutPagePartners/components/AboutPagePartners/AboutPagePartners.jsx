import { Container } from '@/shared/components';
import partners from '../../data/section-content.json';
import AboutPagePartnersCarousel from '../AboutPagePartnersCarousel/AboutPagePartnersCarousel';
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
      <AboutPagePartnersCarousel cards={content.cards} partners={partners} />
    </section>
  );
};

export default AboutPagePartners;
