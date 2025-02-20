import PaymentButton from '../PaymentButton/PaymentButton';
import CurrencyPaymentButton from '../CurrencyPaymentButton/CurrencyPaymentButton';
import { Container } from '@/shared/components';

import s from './PaymentMethodPage.module.scss';

const PaymentMethodPage = ({ sections }) => {
  const { title, paymentCard, methods } = sections[0];

  return (
    <section className={s.sectionPayment}>
      <Container>
        <h1 className={s.titlePayment}>{title}</h1>
        <div className={s.containerContent}>
          <button className={s.paymentCard}>{paymentCard}</button>

          {methods.map(({ key, label, sections }, index) => {
            return key === 'carte' ? (
              <CurrencyPaymentButton
                key={index}
                label={label}
                sections={sections}
              />
            ) : (
              <PaymentButton key={index} label={label} sections={sections} />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default PaymentMethodPage;
