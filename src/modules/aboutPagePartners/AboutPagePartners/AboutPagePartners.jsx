import { Container } from '@/shared/components';
import {
  AboutPagePartnersCarousel,
  partners,
} from '@/modules/aboutPagePartners';
import s from './AboutPagePartners.module.scss';

const AboutPagePartners = () => {
  return (
    <section className={s.partnersSection}>
      <Container>
        <div className={s.mainContainer}>
          <div className={s.textContainer}>
            <h2 className={s.title}>Наші партнери</h2>
            <p className={s.desc}>
              Партнери — це надійна підтримка, завдяки якій ми можемо досягати
              більшого.
            </p>
          </div>
          <AboutPagePartnersCarousel partners={partners} />
        </div>
      </Container>
    </section>
  );
};

export default AboutPagePartners;
