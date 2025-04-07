// import dynamic from 'next/dynamic';

// import { MainPageAbout } from '@/modules/mainPageAbout';
// import { MainPageDonat } from '@/modules/mainPageDonat';
// import { MainPageHero } from '@/modules/mainPageHero';
import { insideServerApi as api } from '@/shared/services';
// const MainPageCollection = dynamic(
//   () =>
//     import(
//       '@/modules/mainPageCollection/components/MainPageCollection/MainPageCollection'
//     ),
//   { ssr: false, loading: () => <div className={s.collectionPlaceholder} /> }
// );
// const MainPageProgress = dynamic(
//   () =>
//     import(
//       '@/modules/mainPageProgress/components/MainPageProgress/MainPageProgress'
//     ),
//   { ssr: false }
// );

// import s from './page.module.scss';

import { lazy, Suspense } from 'react';

const MainPageCollection = lazy(
  () =>
    import(
      '@/modules/mainPageCollection/components/MainPageCollection/MainPageCollection'
    )
);
const MainPageProgress = lazy(
  () =>
    import(
      '@/modules/mainPageProgress/components/MainPageProgress/MainPageProgress'
    )
);
const MainPageHero = lazy(
  () => import('@/modules/mainPageHero/components/MainPageHero/MainPageHero')
);
const MainPageDonat = lazy(
  () => import('@/modules/mainPageDonat/components/MainPageDonat/MainPageDonat')
);
const MainPageAbout = lazy(
  () => import('@/modules/mainPageAbout/components/MainPageAbout/MainPageAbout')
);

const MainPage = async ({ params: { locale } }) => {
  const { sectionsDict } = await api.getPageApi({ locale, page: 'main' });

  return (
    <>
      <Suspense fallback={null}>
        <MainPageHero content={sectionsDict.hero.section_content} />
      </Suspense>
      <Suspense fallback={null}>
        <MainPageCollection
          content={sectionsDict.active_collections.section_content}
        />
      </Suspense>

      <Suspense fallback={null}>
        <MainPageAbout content={sectionsDict.about.section_content} />
      </Suspense>
      <Suspense fallback={null}>
        <MainPageProgress
          content={sectionsDict.closed_collections?.section_content}
        />
      </Suspense>
      <Suspense fallback={null}>
        <MainPageDonat content={sectionsDict.donats.section_content} />
      </Suspense>
    </>
  );
};

export default MainPage;
