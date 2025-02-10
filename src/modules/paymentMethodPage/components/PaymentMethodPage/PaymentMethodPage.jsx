import paymentData from '../../data/sectionContent.json';

import PaymentButton from '../PaymentButton/PaymentButton';
import CurrencyPaymentButton from '../CurrencyPaymentButton/CurrencyPaymentButton ';
import { Container } from '@/shared/components';

import s from './PaymentMethodPage.module.scss';

const PaymentMethodPage = () => {
  const { title, paymentCard, methods } = paymentData;

  return (
    <section className={s.sectionPayment}>
      <Container>
        <h1 className={s.titlePayment}>{title}</h1>
        <div className={s.containerContent}>
          <button className={s.paymentCard}>{paymentCard}</button>

          {methods.map(({ key, label, sections }) =>
            key === 'carte' ? (
              <CurrencyPaymentButton
                key={key}
                label={label}
                sections={sections}
              />
            ) : (
              <PaymentButton key={key} label={label} sections={sections} />
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default PaymentMethodPage;
