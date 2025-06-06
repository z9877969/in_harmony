import { Container, Section, SectionTitle } from '@/shared/components';

import s from './ReportingPageFinishedProjects.module.scss';
import ProjectsList from '../ProjectsList/ProjectsList';

const ReportingPageFinishedProjects = ({ content }) => {
  return (
    <Section className={s.section}>
      <Container>
        <SectionTitle title={content.title} className={s.title} />
        <ProjectsList cards={content.cards} />
      </Container>
    </Section>
  );
};

export default ReportingPageFinishedProjects;
