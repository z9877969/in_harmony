'use client';

import { Button, Container, Icon, SectionTitle } from '@/shared/components';
import donation from '../data/section-content.json';
import s from './AboutPageMakeDonation.module.scss';
import { useRouter } from 'next/navigation';

const AboutPageMakeDonation = () => {
  const router = useRouter(s);

  return (
    <section className={s.makeDonationSection}>
      <Container>
        <div className={s.mainContainer}>
          <div className={s.mainContentContainer}>
            <div className={s.contentContainer}>
              <SectionTitle title={donation.title} />
              <p className={s.desc}>{donation.desc}</p>
            </div>
            <div className={s.buttonsContainer}>
              <Button
                size="large"
                fontSize="eighteen"
                onClick={() => router.push('/donate')}
                className={s.buttonSize}
              >
                {donation.button_donate}
              </Button>
              <Button
                onClick={() => router.push('/enjoy')}
                size="large"
                border="true"
                fontSize="eighteen"
                className={s.buttonSize}
              >
                {donation.button_enjoy}
              </Button>
            </div>
          </div>
          {donation.image && (
            <div className={s.imageContainer}>
              <Icon iconName={donation.image} />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default AboutPageMakeDonation;
