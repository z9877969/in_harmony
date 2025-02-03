import {
  Container,
  Feedbacks,
  SectionTitle,
} from '@/shared/components/index.js';
import s from './ReportingPageFilters.module.scss';

const ReportingPageFilters = () => {
  return (
    <>
      <section className={s.section}>
        <Container>
          <SectionTitle title={'Звітність InHarmony'} className={s.title} />
          <Feedbacks />
        </Container>
      </section>
    </>
  );
};

export default ReportingPageFilters;
