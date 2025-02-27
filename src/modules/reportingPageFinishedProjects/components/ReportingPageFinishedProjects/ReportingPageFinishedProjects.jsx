import { Container, Section, SectionTitle } from '@/shared/components';

import FinishedProjectsList from '../FinishedProjectsList/FinishedProjectsList';
import ButtonReportingPageFinishedProjects from '../ButtonReportingPageFinishedProjects/ButtonReportingPageFinishedProjects.jsx';

import s from './ReportingPageFinishedProjects.module.scss';

const ReportingPageFinishedProjects = ({ content }) => {
  const shouldShowButton = content.cards.length > 4;

  return (
    <Section className={s.section}>
      <Container>
        <SectionTitle title={content.title} className={s.title} />
        <FinishedProjectsList
          data={content.cards}
          contentLength={content.cards.length}
        />
        {shouldShowButton && (
          <ButtonReportingPageFinishedProjects
            contentLength={content.cards.length}
          />
        )}
      </Container>
    </Section>
  );
};

export default ReportingPageFinishedProjects;
