import Image from 'next/image';

import { Container } from '@/shared/components';
import { inHarmonyLogoMini as InHarmonyLogoMini } from '/public/icons';

import { circleColors, textColors } from '../../data/dataStyles';
import data from '../../data/sectionContent.json';

import s from './AboutPageMission.module.scss';

const AboutPageMission = () => {
  return (
    <Container>
      <section className={s.section}>
        <h2 className={s.title}>{data.title}</h2>
        <div className={s.infoBlock}>
          <div className={s.imageWrapper}>
            <Image
              className={s.image}
              src=""
              alt="Team Photo"
              width={416}
              height={306}
            />
          </div>
          <div className={s.about}>
            <h3 className={s.subtitle}>{data.subtitle}</h3>
            <p className={s.descriptionMain}>{data.descriptionMain}</p>
            <p className={s.descriptionExtra}>{data.descriptionExtra}</p>
          </div>
        </div>
        <div>
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
      </section>
    </Container>
  );
};

export default AboutPageMission;
