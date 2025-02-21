import { MainPageAbout } from '@/modules/mainPageAbout';
import { MainPageCollection } from '@/modules/mainPageCollection';
import { MainPageDonat } from '@/modules/mainPageDonat';
import { MainPageHero } from '@/modules/mainPageHero';
import { MainPageProgress } from '@/modules/mainPageProgress';
import { insideServerApi as api } from '@/shared/services';

const MainPage = async ({ params: { locale } }) => {
  const { sectionsDict } = await api.getPageApi({ locale, page: 'main' });

  return (
    <>
      <MainPageHero content={sectionsDict.hero.section_content} />
      <MainPageCollection
        content={sectionsDict.active_collections.section_content}
      />
      <MainPageAbout content={sectionsDict.about.section_content} />
      <MainPageProgress
        content={sectionsDict.closed_collections?.section_content}
      />
      <MainPageDonat content={sectionsDict.donats.section_content} />
    </>
  );
};

export default MainPage;
