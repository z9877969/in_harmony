'use client';


import { usePathname } from 'next/navigation';
import { Container, Icon, SectionTitle } from '@/shared/components';
import donation from '../../data/section-content.json';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import {Container, SectionTitle } from '@/shared/components';
import s from './AboutPageMakeDonation.module.scss';
import LinkButton from '@/shared/components/LinkButton/LinkButton.jsx';
import { LINKDATA, ROUTES } from '@/shared/constants/index.js';


const AboutPageMakeDonation = ({ content }) => {
    const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <section className={s.makeDonationSection}>
      <Container>
        <div className={s.mainContainer}>
          <div className={s.mainContentContainer}>
            <div className={s.contentContainer}>
              <SectionTitle title={content.title} />
              <p className={s.desc}>{content.desc}</p>
            </div>
            <div className={s.buttonsContainer}>
              <LinkButton
                path={`/${locale}/${ROUTES.PAYMENTS(1)}`}
                linkText={ {t('helpBtn')}}
                type={LINKDATA.TYPE_DARK_BF}
                className={s.buttonSize}

              />


            </div>
          </div>
          {Array.isArray(content.image) && content.image.length > 0 && (
            <div className={s.imageWrapper}>
              <Image
                src={content.image[0]}
                alt={content.title}
                size="100%"
                priority
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default AboutPageMakeDonation;
