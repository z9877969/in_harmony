
import { AboutPageMission } from '@/modules/aboutPageMission';
import { AboutPageMakeDonation } from '@/modules/aboutPageMakeDonation';
import { AboutPagePartners } from '@/modules/aboutPagePartners';
import { AboutPageHero } from '@/modules/aboutPageHero';
import { AboutPageTogether } from '@/modules/aboutPageTogether';

import s from './page.module.scss';

const AboutPage = () => {
  return (
    <>
      <h1 className={s.title}>About Page</h1>

      <AboutPageHero />
      <AboutPageMission />
      <AboutPageTogether />
      <AboutPagePartners />
      <AboutPageMakeDonation />

    </>
  );
};

export default AboutPage;
