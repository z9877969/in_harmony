import { TermsAndConditionsPage } from '@/modules/termsAndConditionsPage';
import s from './page.module.scss';

const page = () => {
  return (
    <>
      <h1 className={s.title}>Terms page</h1>
      <TermsAndConditionsPage />
    </>
  );
};

export default page;
