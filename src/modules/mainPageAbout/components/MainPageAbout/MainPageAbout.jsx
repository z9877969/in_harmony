import { AboutPageMission } from '@/modules/aboutPageMission';
import s from './MainPageAbout.module.scss';

const MainPageAbout = () => {
  return (
    <section>
      <h2 className={s.title}>MainPageAbout</h2>
      <AboutPageMission />
    </section>
  );
};

export default MainPageAbout;
