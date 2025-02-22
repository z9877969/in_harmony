'use client';

import { usePathname } from 'next/navigation';
import { Container, Icon, SectionTitle } from '@/shared/components';
import donation from '../../data/section-content.json';
import s from './AboutPageMakeDonation.module.scss';
import LinkButton from '@/shared/components/LinkButton/LinkButton.jsx';
import { LINKDATA, ROUTES } from '@/shared/constants/index.js';

const AboutPageMakeDonation = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

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
              <LinkButton
                path={`/${locale}/${ROUTES.PAYMENTS(1)}`}
                linkText={donation.button_donate}
                type={LINKDATA.TYPE_DARK_BF}
                className={s.buttonSize}
              />
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
