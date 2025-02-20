import { PaymentMethodPage } from '@/modules/paymentMethodPage';
import { insideServerApi as api } from '@/shared/services';

const PaymentPage = async ({ params: { locale } }) => {
  const { sectionsList } = await api.getPageApi({
    locale,
    page: 'pay-methods',
  });
  return <PaymentMethodPage sections={sectionsList} />;
};

export default PaymentPage;
