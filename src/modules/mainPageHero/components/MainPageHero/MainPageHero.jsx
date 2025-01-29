import AchievementsSection from '../AchievementsSection/AchievementsSection';
import Container from '@/shared/components/Container/Container';
import s from './MainPageHero.module.scss';

const MainPageHero = () => {
  return (
    <section>
      <Container>
        <h2 className={s.title}>MainPageHero</h2>
        <AchievementsSection />
      </Container>
    </section>
  );
};

export default MainPageHero;
