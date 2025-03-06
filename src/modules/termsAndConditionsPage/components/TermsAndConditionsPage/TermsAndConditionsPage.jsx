'use client';

import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { Container } from '@/shared/components';
import TermsAndConditionList from '../TermsAndConditionsList/TermsAndConditionsList';
import s from './TermsAndConditionsPage.module.scss';

const TermsAndConditionsPage = () => {
  const { t } = useTranslation('termsAndConditions');

  const termsArray = useMemo(
    () => t('termsAndConditions', { returnObjects: true }) || [],
    [t]
  );

  const titleDescription = termsArray[0]?.titleDescription || '';
  const termsData = termsArray.slice(1);

  return (
    <section className={s.section}>
      <Container>
        <h1 className={s.title}>{titleDescription}</h1>
        <TermsAndConditionList termsData={termsData} />
      </Container>
    </section>
  );
};

export default TermsAndConditionsPage;
