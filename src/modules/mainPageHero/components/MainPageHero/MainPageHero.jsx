import { Container, FormWithSumButtons } from '@/shared/components';
import InfoCardsList from '../InfoCardsList/InfoCardsList';
import s from './MainPageHero.module.scss';

const MainPageHero = ({ content }) => {
  const media = content?.image?.[0];

  return (
    <section>
      <Container>
        <div className={s.contentContainer}>
          <div className={s.imagePlaceholder}>
            {media && (
              <video className={s.heroVideo} autoPlay loop muted playsInline>
                <source src={media} type="video/mp4" />
              </video>
            )}
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
