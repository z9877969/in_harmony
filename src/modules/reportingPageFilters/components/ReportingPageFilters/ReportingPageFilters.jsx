import { Container, SectionTitle } from '@/shared/components/index.js';

import { Feedbacks } from '../../index.js';

import s from './ReportingPageFilters.module.scss';

const ReportingPageFilters = () => {
  return (
    <>
      <section className={s.section}>
        <Container>
          <SectionTitle title={'Звітність InHarmony'} className={s.title} />
          <Feedbacks href={'/about'} />
        </Container>
      </section>
    </>
  );
};

export default ReportingPageFilters;
