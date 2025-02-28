import { Container } from '@/shared/components';

import FormWithInfo from '../FormWithInfo/FormWithInfo.jsx';

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
            <h1 className={s.heroTitle}>{content?.title}</h1>
            <FormWithInfo content={content} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainPageHero;
