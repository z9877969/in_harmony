import {
  peacePosterMobile,
  peacePosterMobile2x,
  peacePosterTablet,
  peacePosterTablet2x,
  peacePosterDesktop,
  peacePosterDesktop2x,
} from '@/shared/images/discard-help-page-hero';
import { Container } from '@/shared/components';

import data from '../../data/sectionContent.json';

import s from './DiscardHelpPageHero.module.scss';

const DiscardHelpPageHero = () => {
  return (
    <section>
      <Container>
        <div className={s.mainContainer}>
          <div className={s.imageContainer}>
            <picture>
              <source
                srcSet={`${peacePosterMobile.src} 1x, ${peacePosterMobile2x.src} 2x`}
                media="(max-width: 767px)"
              />
              <source
                srcSet={`${peacePosterTablet.src} 1x, ${peacePosterTablet2x.src} 2x`}
                media="(max-width: 1023px)"
              />
              <source
                srcSet={`${peacePosterDesktop.src} 1x, ${peacePosterDesktop2x.src} 2x`}
                media="(min-width: 1024px)"
              />
              <img
                src={peacePosterMobile.src}
                alt="Peace poster"
                className={s.image}
                loading="lazy"
              />
            </picture>
          </div>
          <div className={s.textBlock}>
            <h1 className={s.title}>{data.title}</h1>
            <p className={s.paragraph}>{data.firstParagraph}</p>
            <p>{data.secondParagraph}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DiscardHelpPageHero;
