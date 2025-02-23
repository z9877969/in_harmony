import { Container } from '@/shared/components';

import { Feedbacks } from '../../index.js';

import s from './ReportingPageFilters.module.scss';

const ReportingPageFilters = ({ content }) => {
  return (
    <section className={s.section}>
      <Container>
        <h1 className={s.title}>{content.title}</h1>

        <Feedbacks content={content} />
      </Container>
    </section>
  );
};

export default ReportingPageFilters;
