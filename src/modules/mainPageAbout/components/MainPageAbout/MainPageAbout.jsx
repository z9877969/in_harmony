import { Container } from '@/shared/components';
import ActivitiesCard from '../ActivitiesCard/ActivitiesCard';
import s from './MainPageAbout.module.scss';
import data from '../../data/info.json';
import Button from '@/shared/components/Button/Button';

const MainPageAbout = () => {
  return (
    <section>
      <Container>
        <div className={s.contentContainer}>
          <section className={s.about}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </section>
          <section className={s.activities}>
            <h3>{data.activities.title}</h3>
            <div className={s.cards}>
              {data.activities.cards.map((item) => (
                <ActivitiesCard
                  key={item.id}
                  logo={item.logo}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </section>
          <section className={s.motivation}>{data.motivation}</section>
          <section className={s.image}></section>
          <section className={s.learnMore}>
            <Button variant="secondary" border={true}>
              {data.learnMore}
            </Button>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default MainPageAbout;
