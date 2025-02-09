import {
  Container,
  FormWithSumButtons,
  PublicPrivateForm,
} from '@/shared/components/index.js';

const PaymentsPage = ({ params }) => {
  const { stepAmount } = params;

  return (
    <>
      <Container>
        <h2>ProgressBar</h2>
        {stepAmount === '1' && <FormWithSumButtons />}
        {stepAmount === '2' && <PublicPrivateForm />}
      </Container>
    </>
  );
};

export default PaymentsPage;
