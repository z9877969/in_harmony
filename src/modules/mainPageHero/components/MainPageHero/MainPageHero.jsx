import dynamic from 'next/dynamic.js';

import { Container } from '@/shared/components';
import FormWithInfo from '../FormWithInfo/FormWithInfo.jsx';
import { getImageSrc } from '@/shared/helpers/getImageSrc.js';
const VideoBackground = dynamic(
  () => import('../VideoBackground/VideoBackground.jsx'),
  { ssr: false }
);

import s from './MainPageHero.module.scss';

const MainPageHero = ({ content = {} }) => {
  const media = getImageSrc(content.image?.[0]);

  return (
    <section>
      <Container>
        <div className={s.contentContainer}>
          <div className={s.imagePlaceholder}>
            <VideoBackground media={media} />
            <h1 className={s.heroTitle}>{content?.title}</h1>
            <FormWithInfo content={content} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainPageHero;
