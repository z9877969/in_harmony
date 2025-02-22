import Image from 'next/image';
import { Container, SectionTitle } from '@/shared/components';
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
              <p className={s.desc}>{content.desc}</p>
            </div>
            <div className={s.buttonsContainer}>
              <HelpButton />
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
