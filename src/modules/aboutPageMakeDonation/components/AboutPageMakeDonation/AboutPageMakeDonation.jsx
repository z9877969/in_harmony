'use client';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { Button, Container, SectionTitle } from '@/shared/components';
import s from './AboutPageMakeDonation.module.scss';

const AboutPageMakeDonation = ({ content }) => {
  const { t } = useTranslation('aboutPage.togetherSection');
  const router = useRouter(s);
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
              <Button
                size="large"
                fontSize="eighteen"
                onClick={() => router.push('/donate')}
                className={s.buttonSize}
              >
                {t('helpBtn')}
              </Button>
              <Button
                onClick={() => router.push('/enjoy')}
                size="large"
                border="true"
                fontSize="eighteen"
                className={s.buttonSize}
              >
                {t('joinBtn')}
              </Button>
            </div>
          </div>
          {Array.isArray(content.image) && content.image.length > 0 && (
            <div className={s.imageWrapper}>
              <Image
                src={content.image[0]}
                alt={content.title}
                fill
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default AboutPageMakeDonation;
