'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { LINKDATA, ROUTES } from '@/shared/constants';
import { useTranslation } from 'react-i18next';
import LinkButton from '@/shared/components/LinkButton/LinkButton.jsx';

import { Container } from '@/shared/components';

import s from './ReportingPageDonate.module.scss';

const ReportingPageDonate = ({ content }) => {
  const { t } = useTranslation('reportingPage');
  const pathname = usePathname();

  const locale = pathname.split('/')[1];

  // dataProps отримуємо з пропсів або з fetch-запиту
  const dataProps =
    content.image && content.image.length > 0
      ? {
          imageUrl: content.image[0],
        }
      : {
          imageUrl: '/images/default-image.jpg',
        };

  return (
    <section className={s.section}>
      <Container>
        <div className={s.content}>
          <div className={s.imageWrapper}>
            <Image
              className={s.image}
              src={dataProps.imageUrl}
              alt={content.title}
              fill
              priority
              sizes="100%"
              placeholder="blur"
              blurDataURL="/images/blur-placeholder.jpg"
            />
          </div>
          <div className={s.textContainer}>
            <h3 className={s.title}>{content.title}</h3>
            <div>
              <LinkButton
                path={`/${locale}/${ROUTES.COLLECTION}`}
                type={LINKDATA.TYPE_DARK_BF}
                className={s.button}
                linkText={t('button_to_collections')}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReportingPageDonate;
