import { Container } from '@/shared/components';
import sectionContent from '../../data/sectionContent.json';
import InfoCardHelp from '../infoCardHelp/infoCardHelp';
import s from './aboutPageHero.module.scss';

const AboutPageHero = () => {
  return (
    <section className={s.sectionAboutHero}>
      <Container>
        <div className={s.containerContent}>
          <h1 className={s.title}>{sectionContent.heroTitle}</h1>{' '}
          <div className={s.containerListImg}>
            <div className={s.image}></div>
            <ul className={s.ulList}>
              <li className={s.ulItem}>
                <h2 className={s.titleInfo}>
                  {sectionContent.introText.sectionTitle}
                </h2>
                <p className={s.descriptionBlack}>
                  {sectionContent.introText.description1}
                </p>
              </li>
              <li className={s.ulItem}>
                <p className={s.description}>
                  {sectionContent.introText.description2}
                </p>
              </li>
              <li className={s.ulItem}>
                <p className={s.description}>
                  {sectionContent.introText.description3}
                </p>
              </li>
            </ul>
          </div>
          <InfoCardHelp />
        </div>
      </Container>
    </section>
  );
};

export default AboutPageHero;
