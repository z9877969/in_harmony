import data from './data/sectionContent.json';

import {
  Container,
  FormWithSumButtons,
  ProgressBar,
  PublicPrivateForm,
  SectionTitle,
} from '@/shared/components';

import s from './page.module.scss';

const PaymentsPage = ({ params }) => {
  const { stepAmount } = params;
  const progress = stepAmount === '1' ? 30 : stepAmount === '2' ? 60 : 100;

  return (
    <>
      <section className={s.section}>
        <Container>
          <div className={s.boxPaymentPage}>
            <ProgressBar
              className={s.progressBarPaymentPage}
              progress={progress}
              progressLine={s.progressLinePaymentPage}
            />
            <SectionTitle className={s.titlePaymentPage} title={data.title} />
            {stepAmount === '1' && <FormWithSumButtons />}
            {stepAmount === '2' && <PublicPrivateForm />}
          </div>
        </Container>
      </section>
    </>
  );
};

export default PaymentsPage;
