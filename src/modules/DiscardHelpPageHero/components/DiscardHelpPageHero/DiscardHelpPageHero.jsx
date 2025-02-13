import Image from 'next/image';

import {
  peacePosterMobile,
  peacePosterMobile2x,
  peacePosterTablet,
  peacePosterTablet2x,
  peacePosterDesktop,
  peacePosterDesktop2x,
} from '@/shared/images/discard-help-page-hero';
import { Container, Section } from '@/shared/components';
import data from '../../data/sectionContent.json';

import s from './DiscardHelpPageHero.module.scss';

const DiscardHelpPageHero = () => {
  return (
    <Container>
      <Section className={s.section}>
        <div className={s.imageWrapper}>
          <Image
            className={s.image}
            src={peacePosterDesktop.src}
            alt={data.alt}
            fill
            priority
            sizes="100%"
            srcSet={`
                ${peacePosterMobile.src} 320w,
                ${peacePosterMobile2x.src} 640w, 
                ${peacePosterTablet.src} 768w,
                ${peacePosterTablet2x.src} 1536w, 
                ${peacePosterDesktop.src} 1440w,
                ${peacePosterDesktop2x.src} 2880w
              `}
          />
        </div>
        <div className={s.textBlock}>
          <h1 className={s.title}>{data.title}</h1>
          <p className={s.paragraph}>{data.firstParagraph}</p>
          <p>{data.secondParagraph}</p>
        </div>
      </Section>
    </Container>
  );
};

export default DiscardHelpPageHero;
