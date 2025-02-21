import { Container, Section } from '@/shared/components';
import TeamPersonCard from '../TeamPersonCard/TeamPersonCard';

import s from './AboutPageTogether.module.scss';

const AboutPageTogether = ({ content }) => {
  return (
    <Section>
      <Container>
        <div className={s.contentContainer}>
          <h2 className={s.title}>{content.title}</h2>
          <div className={s.team}>
            <h3>{content.team.title}</h3>
          </div>
          <ul className={s.cards}>
            {content.team.cards.map((item) => (
              <li key={item.id}>
                <TeamPersonCard
                  icon={item.icon}
                  image={item.image ? item.image : item.icon}
                  name={item.name}
                  role={item.role}
                  description={item.description}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
};

export default AboutPageTogether;
