import Image from 'next/image';
import { Container } from '@/shared/components';
import Icon from '@/shared/components/Icon/Icon.jsx';
import InfoCardHelp from '../infoCardHelp/infoCardHelp';
import s from './aboutPageHero.module.scss';

const AboutPageHero = ({ content }) => {
  return (
    <section className={s.sectionAboutHero}>
      <Container>
        <div className={s.containerContent}>
          <h1 className={s.title}>{content.title}</h1>
          <div className={s.containerListImg}>
            <div className={s.image}>
              {content.image[0] && (
                <Image
                  className={s.image}
                  src={content.image[0]}
                  alt={content.title}
                  width={416}
                  height={306}
                  priority
                  style={{ objectFit: 'cover' }}
                />
              )}
            </div>
            <ul className={s.ulList}>
              <li className={s.ulItem}>
                <h2 className={s.titleInfo}>
                  {content.introText.sectionTitle}
                </h2>
                <p className={s.descriptionBlack}>
                  {content.introText.description1}
                </p>
              </li>
              <li className={s.ulItem}>
                <p className={s.description}>
                  {content.introText.description2}
                </p>
              </li>
              <li className={s.ulItem}>
                <p className={s.description}>
                  {content.introText.description3}
                </p>
              </li>
            </ul>
          </div>
          <InfoCardHelp
            statsTitle={content.statsTitle}
            stats={content.cards}
            IconComponent={Icon}
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutPageHero;
