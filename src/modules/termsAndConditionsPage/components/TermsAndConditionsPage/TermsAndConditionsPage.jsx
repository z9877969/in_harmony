import { Container } from '@/shared/components';
import s from './TermsAndConditionsPage.module.scss';

import termsData from '../../data/sectionContent';
import TermsAndConditionList from '../TermsAndConditionsList/TermsAndConditionsList';

const TermsAndConditionsPage = () => {
  return (
    <section className={s.section}>
      <Container>
        <h1 className={s.title}>Правила та умови сайту</h1>
        <TermsAndConditionList termsData={termsData} />
      </Container>
    </section>
  );
};

export default TermsAndConditionsPage;
