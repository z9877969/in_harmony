import Image from 'next/image';

import { Container, Section, SectionTitle } from '@/shared/components';
import { inHarmonyLogoMini as InHarmonyLogoMini } from '/public/icons';
import { circleColors, textColors } from '../../data/dataStyles';

import s from './AboutPageMission.module.scss';

const AboutPageMission = ({ content }) => {
  const dataProps = {
    imageUrl: '/images/default_image.webp',
  };
  return (
    <Section className={s.section}>
      <Container>
        <div className={s.content}>
          <SectionTitle title={content.title} className={s.title} />
          <div className={s.infoBlock}>
            <div className={s.imageWrapper}>
              {content.image[0] ? (
                <Image
                  className={s.image}
                  src={content.image[0]}
                  alt="Team Photo"
                  width={416}
                  height={306}
                  priority
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <Image
                  className={s.image}
                  src={dataProps.imageUrl}
                  alt="Team Photo"
                  width={416}
                  height={306}
                  priority
                />
              )}
            </div>
            <div className={s.about}>
              <h3 className={s.subtitle}>{content.subtitle}</h3>
              <p className={s.descriptionMain}>{content.descriptionMain}</p>
              <p className={s.descriptionExtra}>{content.descriptionExtra}</p>
            </div>
          </div>
          <div className={s.iconsContainer}>
            <h3 className={s.inspirationTitle}>
              {content.inspiration.inspirationTitle}
            </h3>
            <ul className={s.inspirationList}>
              {content.inspiration.cards.map((item, index) => (
                <li key={index} className={s.inspirationItem}>
                  <div className={s.circleWrapper}>
                    <div className={`${s.circle} ${circleColors[index]}`} />
                    <h4
                      className={`${s.inspirationItemTitle} ${textColors[index]}`}
                    >
                      {item.title}
                    </h4>
                  </div>
                  <p className={s.inspirationItemText}>{item.text}</p>
                </li>
              ))}
              <li className={s.icon}>
                <InHarmonyLogoMini width={196} height={207} />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutPageMission;
