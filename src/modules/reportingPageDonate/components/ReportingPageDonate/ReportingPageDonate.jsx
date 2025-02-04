'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Button, Container } from '@/shared/components';
import { ROUTES } from '@/shared/constants';

import {
  girlMobil,
  girlMobil2x,
  girlTablet,
  girlTablet2x,
  girlDesktop,
  girlDesktop2x,
} from '@/shared/images/reporting-page-donate';
import reporting from '../../data/section-content.json';
import s from './ReportingPageDonate.module.scss';

const ReportingPageDonate = () => {
  const route = useRouter();
  const pathname = usePathname();

  const locale = pathname.split('/')[1];

  return (
    <section className={s.section}>
      <Container>
        <div className={s.mainContainer}>
          <div className={s.imageContainer}>
            <picture>
              <source
                srcSet={`${girlMobil.src} 1x, ${girlMobil2x.src} 2x`}
                media="(max-width: 767px)"
              />
              <source
                srcSet={`${girlTablet.src} 1x, ${girlTablet2x.src} 2x`}
                media="(max-width: 1023px)"
              />
              <source
                srcSet={`${girlDesktop.src} 1x, ${girlDesktop2x.src} 2x`}
                media="(min-width: 1024px)"
              />
              <img
                src={girlMobil.src}
                alt={reporting.title}
                className={s.image}
                loading="lazy"
              />
            </picture>
          </div>

          <div className={s.textContainer}>
            <h3 className={s.title}>{reporting.title}</h3>
            <Button
              onClick={() => route.push(`/${locale}/${ROUTES.COLLECTION}`)}
              size="large"
              className={s.button}
            >
              {reporting.button_to_collections}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReportingPageDonate;
