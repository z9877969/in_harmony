
import { Container } from '@/shared/components';
import Button from '@/shared/components/Button/Button';
import ActivitiesCard from '../ActivitiesCard/ActivitiesCard';
import data from '../../data/sectionContent.json';

import s from './MainPageAbout.module.scss';

const MainPageAbout = () => {
  return (
    <section className={s.wrapper}>
      <Container>
        <div className={s.contentContainer}>
          <div className={s.about}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
          <div className={s.activities}>
            <h3>{data.activities.title}</h3>
            <ul className={s.cards}>
              {data.activities.cards.map((item) => (
                <li key={item.id}>
                  <ActivitiesCard
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                </li>
              ))}
            </ul>
          </div>
          <p className={s.motivation}>{data.motivation}</p>
          <div className={s.image}></div>
          <div className={s.learnMore}>
            <Button variant="secondary" border={true}>
              {data.learnMore}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainPageAbout;
