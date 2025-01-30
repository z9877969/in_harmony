import { Container } from '@/shared/components';
import ActivitiesCard from '../ActivitiesCard/ActivitiesCard';
import s from './MainPageAbout.module.scss';
import data from '../../data/info.json';
import Button from '@/shared/components/Button/Button';

const MainPageAbout = () => {
  return (
    <Container>
      <div className={s.container}>
        <section className={s.about}>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </section>
        <section className={s.activities}>
          <h1>{data.activities.title}</h1>
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
  );
};

export default MainPageAbout;
