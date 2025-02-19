import Image from 'next/image';

import { Container, Section, SectionTitle } from '@/shared/components';
import { inHarmonyLogoMini as InHarmonyLogoMini } from '/public/icons';
import { circleColors, textColors } from '../../data/dataStyles';
import data from '../../data/sectionContent.json';

import s from './AboutPageMission.module.scss';

const AboutPageMission = () => {
    // dataProps отримуємо з пропсів або з fetch-запиту
    const dataProps = {
      imageUrl: '/images/default_image.webp',
    };
  return (
    <Section className={s.section}>
      <Container>
        <div className={s.content}>
          <SectionTitle title={data.title} className={s.title} />
          <div className={s.infoBlock}>
            <div className={s.imageWrapper}>
              <Image
                className={s.image}
                src={dataProps.imageUrl}
                alt="Team Photo"
                width={416}
                height={306}
                priority
              />
            </div>
            <div className={s.about}>
              <h3 className={s.subtitle}>{data.subtitle}</h3>
              <p className={s.descriptionMain}>{data.descriptionMain}</p>
              <p className={s.descriptionExtra}>{data.descriptionExtra}</p>
            </div>
          </div>
          <div className={s.iconsContainer}>
            <h3 className={s.inspirationTitle}>
              {data.inspiration.inspirationTitle}
            </h3>
            <ul className={s.inspirationList}>
              {data.inspiration.inspirationList.map((item, index) => (
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
