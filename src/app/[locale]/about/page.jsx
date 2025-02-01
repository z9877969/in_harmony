import { AboutPagePartners } from '@/modules/aboutPagePartners';
import { AboutPageHero } from '@/modules/aboutPageHero';
import s from './page.module.scss';

const AboutPage = () => {
  return (
    <>
      <h1 className={s.title}>About Page</h1>
      <AboutPageHero />
      <h2>AboutPageMission</h2>
      <h2>AboutPageTogether</h2>
      <AboutPagePartners />
      <h2>AboutPageMakeDonation</h2>
    </>
  );
};

export default AboutPage;
