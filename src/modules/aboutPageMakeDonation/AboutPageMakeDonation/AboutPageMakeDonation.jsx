import { Button, Container } from '@/shared/components';
import donation from '../data/make-donation.json';
import s from './aboutPageMakeDonation.module.scss';

const AboutPageMakeDonation = () => {
  return (
    <section>
      <Container>
        <div className={s.contentContainer}>
          <h1 className={s.title}>{donation.title}</h1>
          <p className={s.desc}>{donation.desc}</p>
        </div>
        <div className={s.buttonsContainer}>
          <Button size="large" className="">
            {donation.button_donate}
          </Button>
          <Button size="large" border="true" className="">
            {donation.button_enjoy}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default AboutPageMakeDonation;
