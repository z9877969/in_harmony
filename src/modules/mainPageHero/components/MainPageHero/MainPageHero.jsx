// import dynamic from 'next/dynamic.js';

import { Container } from '@/shared/components';
import FormWithInfo from '../FormWithInfo/FormWithInfo.jsx';
import { getImageSrc } from '@/shared/helpers/getImageSrc.js';
// const VideoBackground = dynamic(
//   () => import('../VideoBackground/VideoBackground.jsx'),
//   { ssr: false }
// );
const VideoBackground = lazy(
  () => import('../VideoBackground/VideoBackground.jsx')
  // { ssr: false }
);

import s from './MainPageHero.module.scss';
import { lazy, Suspense } from 'react';

const MainPageHero = ({ content = {} }) => {
  const media = getImageSrc(content.image?.[0]);
  // const media = null;

  return (
    <section>
      <Container>
        <div className={s.contentContainer}>
          <div className={s.imagePlaceholder}>
            <Suspense fallback={null}>
              <VideoBackground media={media} />
            </Suspense>
            <h1 className={s.heroTitle}>{content?.title}</h1>
            <Suspense fallback={null}>
              <FormWithInfo content={content} />
            </Suspense>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainPageHero;
