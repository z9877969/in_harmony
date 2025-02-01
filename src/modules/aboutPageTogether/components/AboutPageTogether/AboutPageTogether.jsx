import { Container } from '@/shared/components';
import TeamPersonCard from '../TeamPersonCard/TeamPersonCard';
import data from '../../data/sectionContent.json';
import s from './AboutPageTogether.module.scss';

const AboutPageTogether = () => {
  return (
    <section>
      <Container>
        <div className={s.contentContainer}>
          <section className={s.title}>
            <h2>{data.title}</h2>
          </section>
          <section className={s.team}>
            <h3>{data.team.title}</h3>
            <p>{data.team.description}</p>
          </section>
          <section className={s.cards}>
            {data.team.cards.map((item) => (
              <TeamPersonCard
                key={item.id}
                icon={item.icon}
                name={item.name}
                role={item.role}
                description={item.description}
              />
            ))}
          </section>
        </div>
      </Container>
    </section>
  );
};

export default AboutPageTogether;
