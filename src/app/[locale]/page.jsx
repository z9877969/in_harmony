import { MainPageAbout } from '@/modules/mainPageAbout';
import { MainPageCollection } from '@/modules/mainPageCollection';
import { MainPageDonat } from '@/modules/mainPageDonat';
import { MainPageHero } from '@/modules/mainPageHero';
import { MainPageProgress } from '@/modules/mainPageProgress';
import PageComponent from '@/modules/pageComponent';

const MainPage = () => {
  return (
    <>
      <PageComponent />
      <MainPageHero />
      <MainPageCollection />
      <MainPageAbout />
      <MainPageProgress />
      <MainPageDonat />
    </>
  );
};

export default MainPage;
