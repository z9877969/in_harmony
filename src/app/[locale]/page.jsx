import { MainPageAbout } from '@/modules/mainPageAbout';
import { MainPageCollection } from '@/modules/mainPageCollection';
import { MainPageDonat } from '@/modules/mainPageDonat';
import { MainPageHero } from '@/modules/mainPageHero';
import { MainPageProgress } from '@/modules/mainPageProgress';
import { insideServerApi as api } from '@/shared/services';

const MainPage = async ({ params: { locale } }) => {
  const { sectionsDict } = await api.getPageApi({ locale, page: 'main' });
  const pages = await api.getAllPages({ locale });

  // eslint-disable-next-line
  console.log('sectionsDict :>> ', sectionsDict);
  // eslint-disable-next-line
  console.log('pages :>> ', pages);

  return (
    <>
      <MainPageHero content={sectionsDict.hero.section_content} />
      <MainPageCollection />
      <MainPageAbout />
      <MainPageProgress />
      <MainPageDonat content={sectionsDict.donats.section_content} />
    </>
  );
};

export default MainPage;
