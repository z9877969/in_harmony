import InfoCardHelp from '../infoCardHelp/infoCardHelp';
import s from './aboutPageHero.module.scss';
import { Container } from '@/shared/components';

const AboutPageHero = () => {
  return (
    <section className={s.sectionAboutHero}>
      <Container>
        <div className={s.containerContent}>
          <h1 className={s.title}>Ми тут, щоб допомагати</h1>
          <div className={s.containerListImg}>
            <div className={s.image}></div>
            <ul className={s.ulList}>
              <li className={s.ulItem}>
                <h2 className={s.titleInfo}>Заради кого ми працюємо</h2>
                <p className={s.descriptionBlack}>
                  З перших днів війни ми об’єднали наші зусилля, щоб підтримати
                  тих, хто опинився у важких умовах.
                </p>
              </li>
              <li className={s.ulItem}>
                <p className={s.description}>
                  Наша мета — допомагати кожному, хто опинився в складних
                  життєвих умовах, аби вони знали, що про них пам’ятають і
                  готові підтримати.
                </p>
              </li>
              <li className={s.ulItem}>
                <p className={s.description}>
                  Подарувати відчуття дому, турботи та впевненості в
                  завтрашньому дні всім, хто цього потребує — цивільним,
                  військовим, громадам та покинутим тваринам.
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
