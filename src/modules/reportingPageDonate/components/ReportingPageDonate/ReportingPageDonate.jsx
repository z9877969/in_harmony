'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import { Button, Container } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import reporting from '../../data/section-content.json';

import s from './ReportingPageDonate.module.scss';

const ReportingPageDonate = () => {
  const route = useRouter();
  const pathname = usePathname();

  const locale = pathname.split('/')[1];

  // dataProps отримуємо з пропсів або з fetch-запиту
  const dataProps = {
    imageUrl: '/images/girl-desktop2x.png',
  };

  return (
    <section className={s.section}>
      <Container>
        <div className={s.content}>
          <div className={s.imageWrapper}>
            <Image
              className={s.image}
              src={dataProps.imageUrl}
              alt={reporting.title}
              fill
              priority
              sizes="100%"
              placeholder="blur"
              blurDataURL="/images/blur-placeholder.jpg"
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
    </section>
  );
};

export default ReportingPageDonate;
