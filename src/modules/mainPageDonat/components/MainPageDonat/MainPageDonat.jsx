import { FormWithSumButtons } from '@/shared/components/index.js';
import s from './MainPageDonat.module.scss';

const MainPageDonat = () => {
  return (
    <section>
      <h2 className={s.title}>MainPageDonat</h2>
      <FormWithSumButtons />
    </section>
  );
};

export default MainPageDonat;
