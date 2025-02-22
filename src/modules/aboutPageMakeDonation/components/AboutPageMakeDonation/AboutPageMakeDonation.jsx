'use client';

import { Container, Icon, SectionTitle } from '@/shared/components';
import donation from '../../data/section-content.json';

import s from './AboutPageMakeDonation.module.scss';
import HelpButton from '../HelpButton/HelpButton';

const AboutPageMakeDonation = ({ content }) => {
  return (
    <section className={s.makeDonationSection}>
      <Container>
        <div className={s.mainContainer}>
          <div className={s.mainContentContainer}>
            <div className={s.contentContainer}>
              <SectionTitle title={content.title} />
              <p className={s.desc}>{donation.desc}</p>
            </div>
            <div className={s.buttonsContainer}>
              <HelpButton />
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
