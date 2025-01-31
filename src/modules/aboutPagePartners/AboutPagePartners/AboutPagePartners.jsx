import { Container } from '@/shared/components';
import partners from '../data/partners.json';
import AboutPagePartnersCarousel from '../AboutPagePartnersCarousel/AboutPagePartnersCarousel';
import s from './AboutPagePartners.module.scss';

const AboutPagePartners = () => {
  return (
    <section className={s.partnersSection}>
      <Container>
        <div className={s.mainContainer}>
          <div className={s.textContainer}>
            <h2 className={s.title}>{partners.title}</h2>
            <p className={s.desc}>{partners.desc}</p>
          </div>
          <AboutPagePartnersCarousel partners={partners} />
        </div>
      </Container>
    </section>
  );
};

export default AboutPagePartners;
