import { MainPageAbout } from '@/modules/mainPageAbout';
import { MainPageCollection } from '@/modules/mainPageCollection';
import { MainPageDonat } from '@/modules/mainPageDonat';
import { MainPageHero } from '@/modules/mainPageHero';
import { MainPageProgress } from '@/modules/mainPageProgress';
import s from './page.module.scss';
// to remove -Start
import { uaFlag as UaFlagIcon } from '/public/icons';
// to remove -End

const MainPage = () => {
  return (
    <>
      <h1 className={s.title}>MainPage</h1>
      {/* For example to use icons.svg -Start*/}
      <UaFlagIcon className={s.iconTest} />
      {/* For example to use icons.svg -End*/}
      {/* For example to use icons.svg with sprite -Start*/}

      {/* For example to use icons.svg with sprite -End*/}

      <MainPageHero />
      <MainPageCollection />
      <MainPageAbout />
      <MainPageProgress />
      <MainPageDonat />
    </>
  );
};

export default MainPage;
