import {
  Container,
  FormWithSumButtons,
  ProgressBar,
  PublicPrivateForm,
} from '@/shared/components';

import { insideServerApi as api } from '@/shared/services';

import s from './page.module.scss';
import PaymentsPageStep from '@/modules/paymentsPageStep/components/PaymentsPageStep/PaymentsPageStep.jsx';

const PaymentsPage = async ({ params }) => {
  const { stepAmount } = params;
  const progress = stepAmount === '1' ? 30 : stepAmount === '2' ? 60 : 100;

  const { locale } = params;
  const { sectionsDict } = await api.getPageApi({ locale, page: 'collection' });

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
            <PaymentsPageStep />
            {stepAmount === '1' && <FormWithSumButtons />}
            {stepAmount === '2' && (
              <PublicPrivateForm
                content={sectionsDict.active_collections.section_content}
              />
            )}
          </div>
        </Container>
      </section>
    </>
  );
};

export default PaymentsPage;
