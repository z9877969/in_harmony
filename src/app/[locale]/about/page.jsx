import { AboutPageMission } from '@/modules/aboutPageMission';
import { AboutPageMakeDonation } from '@/modules/aboutPageMakeDonation';
import { AboutPagePartners } from '@/modules/aboutPagePartners';
import { AboutPageHero } from '@/modules/aboutPageHero';
import { AboutPageTogether } from '@/modules/aboutPageTogether';
import { insideServerApi as api } from '@/shared/services';
import s from './page.module.scss';

const AboutPage = async ({ params: { locale } }) => {
  const { sectionsDict } = await api.getPageApi({ locale, page: 'about' });
  const pages = await api.getAllPages({ locale });

  // eslint-disable-next-line
  console.log('sectionsDict :>> ', sectionsDict);
  // eslint-disable-next-line
  console.log('pages :>> ', pages);

  return (
    <div className={s.container}>
      <AboutPageHero content={sectionsDict.hero.section_content} />
      <AboutPageMission content={sectionsDict.mission.section_content} />
      <AboutPageTogether content={sectionsDict.together.section_content} />
      <AboutPagePartners content={sectionsDict.partners.section_content} />
      <AboutPageMakeDonation content={sectionsDict.donats.section_content} />
    </div>
  );
};

export default AboutPage;
