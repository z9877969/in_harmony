'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import { Button, Container, Section } from '@/shared/components';
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
    <Section className={s.section}>
      <Container>
        <div className={s.content}>
          <div className={s.imageWrapper}>
            <Image
              className={s.image}
              src={girlDesktop.src}
              alt={reporting.title}
              fill
              priority
              sizes="100%"
              srcSet={`
                ${girlMobil.src} 320w,
                ${girlMobil2x.src} 640w, 
                ${girlTablet.src} 768w,
                ${girlTablet2x.src} 1536w, 
                ${girlDesktop.src} 1440w,
                ${girlDesktop2x.src} 2880w
              `}
            />
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
    </Section>
  );
};

export default ReportingPageDonate;
