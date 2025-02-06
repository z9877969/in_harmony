import {
  Container,
  FormWithSumButtons,
  SectionTitle,
} from '@/shared/components';

import data from '../../data/sectionContent.json';

import s from './MainPageDonat.module.scss';
import {
  mainPageDonateDesktop,
  mainPageDonateDesktop2x,
  mainPageDonateMobile,
  mainPageDonateMobile2x,
  mainPageDonateTablet,
  mainPageDonateTablet2x,
} from '@/shared/images/main-page-donate/index.js';

const MainPageDonat = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.box}>
          <picture className={s.picture}>
            <source
              srcSet={`${mainPageDonateMobile.src} 1x, ${mainPageDonateMobile2x.src} 2x`}
              media="(max-width: 767px)"
            />
            <source
              srcSet={`${mainPageDonateTablet.src} 1x, ${mainPageDonateTablet2x.src} 2x`}
              media="(max-width: 1023px)"
            />
            <source
              srcSet={`${mainPageDonateDesktop.src} 1x, ${mainPageDonateDesktop2x.src} 2x`}
              media="(min-width: 1024px)"
            />
            <img
              src={mainPageDonateMobile.src}
              alt={data.alt}
              className={s.img}
              width={370}
              height={250}
              loading="lazy"
            />
          </picture>

          <div className={s.boxText}>
            <SectionTitle title={data.title} className={s.title} />
            <p className={s.text}>{data.text}</p>
          </div>
          <FormWithSumButtons className={s.form} />
        </div>
      </Container>
    </section>
  );
};

export default MainPageDonat;
