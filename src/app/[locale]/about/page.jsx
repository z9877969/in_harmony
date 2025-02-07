import { AboutPageMakeDonation } from '@/modules/aboutPageMakeDonation';
import { AboutPagePartners } from '@/modules/aboutPagePartners';
import { AboutPageHero } from '@/modules/aboutPageHero';
import { AboutPageTogether } from '@/modules/aboutPageTogether';
import s from './page.module.scss';

const AboutPage = () => {
  return (
    <div className={s.container}>
      <AboutPageHero />
      <AboutPageTogether />
      <AboutPagePartners />
      <AboutPageMakeDonation />
    </div>
  );
};

export default AboutPage;
