import dynamic from 'next/dynamic';

import { Container } from '@/shared/components';
const Feedbacks = dynamic(() => import('../Feedbacks/Feedbacks'), {
  ssr: false,
  loading: () => <div className={s.feedbacksPlaceholder} />,
});

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
