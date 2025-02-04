import { AboutPageMission } from '@/modules/aboutPageMission';
import s from './page.module.scss';

const AboutPage = () => {
  return (
    <>
      <h1 className={s.title}>About Page</h1>
      <h2>AboutPaheHero</h2>
      <AboutPageMission />
      <h2>AboutPageTogether</h2>
      <h2>AboutPagePartners</h2>
      <h2>AboutPageMakeDonation</h2>
    </>
  );
};

export default AboutPage;
