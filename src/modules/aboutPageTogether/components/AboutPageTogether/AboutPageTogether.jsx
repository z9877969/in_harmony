import { Container } from '@/shared/components';
import TeamPersonCard from '../TeamPersonCard/TeamPersonCard';
import data from '../../data/sectionContent.json';
import s from './AboutPageTogether.module.scss';

const AboutPageTogether = () => {
  return (
    <section className={s.wrapper}>
      <Container>
        <div className={s.contentContainer}>
          <h2 className={s.title}>{data.title}</h2>
          <div className={s.team}>
            <h3>{data.team.title}</h3>
            <p>{data.team.description}</p>
          </div>
          <ul className={s.cards}>
            {data.team.cards.map((item) => (
              <li key={item.id}>
                <TeamPersonCard
                  icon={item.icon}
                  name={item.name}
                  role={item.role}
                  description={item.description}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default AboutPageTogether;
