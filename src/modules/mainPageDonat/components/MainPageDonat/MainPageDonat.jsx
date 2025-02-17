import Image from 'next/image';

import {
  Container,
  FormWithSumButtons,
  Section,
  SectionTitle,
} from '@/shared/components';
import {
  mainPageDonateDesktop,
  mainPageDonateDesktop2x,
  mainPageDonateMobile,
  mainPageDonateMobile2x,
  mainPageDonateTablet,
  mainPageDonateTablet2x,
} from '@/shared/images/main-page-donate';

import s from './MainPageDonat.module.scss';

const MainPageDonat = ({ content }) => {
  return (
    <Section className={s.section}>
      <Container>
        <div className={s.content}>
          <div className={s.imageWrapper}>
            <Image
              className={s.image}
              src={mainPageDonateDesktop.src}
              alt={content.alt}
              fill
              priority
              sizes="100%"
              placeholder="blur"
              blurDataURL="/images/blur-placeholder.jpg"
              srcSet={`
                ${mainPageDonateMobile.src} 320w,
                ${mainPageDonateMobile2x.src} 640w,
                ${mainPageDonateTablet.src} 768w,
                ${mainPageDonateTablet2x.src} 1536w,
                ${mainPageDonateDesktop.src} 1440w,
                ${mainPageDonateDesktop2x.src} 2880w
              `}
            />
          </div>
          <div className={s.boxText}>
            <SectionTitle title={content.title} className={s.title} />
            <p className={s.text}>{content.description}</p>
          </div>
          <FormWithSumButtons className={s.form} />
        </div>
      </Container>
    </Section>
  );
};

export default MainPageDonat;
