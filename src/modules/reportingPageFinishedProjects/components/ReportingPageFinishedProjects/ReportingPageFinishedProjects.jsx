import React from 'react';

import { Container, Section, SectionTitle } from '@/shared/components';
import FinishedProjectsList from '../FinishedProjectsList/FinishedProjectsList';
import s from './ReportingPageFinishedProjects.module.scss';

export default function ReportingPageFinishedProjects({ content }) {
  return (
    <Section className={s.section}>
      <Container>
        <SectionTitle title={content.title} className={s.title} />
        <FinishedProjectsList data={content.cards} />
      </Container>
    </Section>
  );
}
