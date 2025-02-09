import Image from 'next/image';

import {
  Container,
  FormWithSumButtons,
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
import data from '../../data/sectionContent.json';

import s from './MainPageDonat.module.scss';

const MainPageDonat = () => {
  return (
    <Container>
      <section className={s.section}>
        <div className={s.imageWrapper}>
          <Image
            className={s.image}
            src={mainPageDonateDesktop.src}
            alt={data.alt}
            fill
            priority
            sizes="100%"
            srcSet={`
                ${mainPageDonateMobile.src} 320w, 
                ${mainPageDonateTablet.src} 768w, 
                ${mainPageDonateDesktop.src} 1440w,
                ${mainPageDonateMobile2x.src} 640w, 
                ${mainPageDonateTablet2x.src} 1536w, 
                ${mainPageDonateDesktop2x.src} 2880w
              `}
          />
        </div>
        <div className={s.boxText}>
          <SectionTitle title={data.title} className={s.title} />
          <p className={s.text}>{data.text}</p>
        </div>
        <FormWithSumButtons className={s.form} />
      </section>
    </Container>
  );
};

export default MainPageDonat;
