import { Container } from '@/shared/components';
import Button from '@/shared/components/Button/Button';
import ActivitiesCard from '../ActivitiesCard/ActivitiesCard';
import data from '../../data/sectionContent.json';
import s from './MainPageAbout.module.scss';

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
                  icon={item.icon}
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
