import { AboutPageHero } from '@/modules/aboutPageHero';
import { AboutPageTogether } from '@/modules/aboutPageTogether';
import s from './page.module.scss';

const AboutPage = () => {
  return (
    <>
      <h1 className={s.title}>About Page</h1>
      <AboutPageHero />
      <h2>AboutPageMission</h2>
      <AboutPageTogether />
      <AboutPagePartners />
      <AboutPageMakeDonation />
    </>
  );
};

export default AboutPage;
