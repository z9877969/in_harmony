import { Container, FormWithSumButtons } from '@/shared/components';
import InfoCardsList from '../InfoCardsList/InfoCardsList';
import s from './MainPageHero.module.scss';

const MainPageHero = ({ content }) => {
  return (
    <section>
      <Container>
        <div className={s.contentContainer}>
          <div className={s.imagePlaceholder}>
            <div className={s.containerTitleForm}>
              <h1 className={s.heroTitle}>{content?.title}</h1>
              <FormWithSumButtons className={s.form} />
            </div>
            <InfoCardsList infoCards={content?.cards} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainPageHero;
