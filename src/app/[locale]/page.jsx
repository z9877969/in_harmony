import dynamic from 'next/dynamic';

import { MainPageAbout } from '@/modules/mainPageAbout';
import { MainPageDonat } from '@/modules/mainPageDonat';
import { MainPageHero } from '@/modules/mainPageHero';
import { insideServerApi as api } from '@/shared/services';
const MainPageCollection = dynamic(
  () =>
    import(
      '@/modules/mainPageCollection/components/MainPageCollection/MainPageCollection'
    ),
  { ssr: false, loading: () => <div className={s.collectionPlaceholder} /> }
);
const MainPageProgress = dynamic(
  () =>
    import(
      '@/modules/mainPageProgress/components/MainPageProgress/MainPageProgress'
    ),
  { ssr: false }
);

import s from './page.module.scss';

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
// comment to start redeploy
