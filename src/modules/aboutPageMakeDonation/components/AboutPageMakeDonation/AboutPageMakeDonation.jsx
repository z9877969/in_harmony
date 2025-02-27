import { Container, SectionTitle } from '@/shared/components';
import Image from 'next/image.js';

import LinkButtonAboutPageMakeDonate from '../LinkButtonAboutPageMakeDonate/LinkButtonAboutPageMakeDonate.jsx';

import s from './AboutPageMakeDonation.module.scss';

const AboutPageMakeDonation = ({ content }) => {
  const image = content.image;
  return (
    <section className={s.makeDonationSection}>
      <Container>
        <div className={s.mainContainer}>
          <div className={s.mainContentContainer}>
            <div className={s.contentContainer}>
              <SectionTitle title={content.title} />
              <p className={s.desc}>{content.desc}</p>
            </div>
            <LinkButtonAboutPageMakeDonate />
          </div>
          <div className={s.imageContainer}>
            <Image
              className={s.image}
              src={image && image[0]}
              alt={content.title}
              height={360}
              width={636}
              priority
              placeholder="blur"
              blurDataURL="/images/blur-placeholder.jpg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPageMakeDonation;
