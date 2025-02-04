import { Container, FormWithSumButtons } from '@/shared/components';
import InfoCardsList from '../InfoCardsList/InfoCardsList';
import sectionContent from '../../data/sectionContent.json';
import s from './MainPageHero.module.scss';

const MainPageHero = () => {
  return (
    <section>
      <Container>
        <div className={s.contentContainer}>
          <div className={s.imagePlaceholder}>
            <div className={s.containerTitleForm}>
              <h1 className={s.heroTitle}>{sectionContent.heroTitle}</h1>
              <FormWithSumButtons className={s.form} />
            </div>
            <InfoCardsList infoCards={sectionContent.infoCards} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainPageHero;
