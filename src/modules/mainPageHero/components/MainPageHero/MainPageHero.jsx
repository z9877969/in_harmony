import s from './MainPageHero.module.scss';
import { Container } from '@/shared/components';
import InfoCardsList from '../InfoCardsList/InfoCardsList';
const MainPageHero = () => {
  return (
    <section>
      <Container>
        <div className={s.contentContainer}>
          <div className={s.imagePlaceholder}>
            <div className={s.containerTitleForm}>
              <h1 className={s.heroTitle}>
                Допомагаємо тим, хто опинився в важких життєвих умовах
              </h1>
              <div className={s.formPlaceholder}>
                <h2>Тут буде форма</h2>
              </div>
            </div>
            <InfoCardsList />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainPageHero;
