'use client';

import { SectionTitle } from '@/shared/components/index.js';
import { useTranslation } from 'react-i18next';

import s from './PaymentsPageStep.module.scss';

const PaymentsPageStep = () => {
  const { t } = useTranslation('paymentPage');
  return (
    <>
      <SectionTitle className={s.titlePaymentPage} title={t('title')} />
    </>
  );
};

export default PaymentsPageStep;
