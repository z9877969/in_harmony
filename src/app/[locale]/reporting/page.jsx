import { ReportingPageDonate } from '@/modules/reportingPageDonate';
import s from './page.module.scss';

const ReportingPage = () => {
  return (
    <>
      <h1 className={s.title}>ReportingPage</h1>
      <h2>ReportingPageFilters</h2>
      <h2>ReportingPageFinishedProjects</h2>
      <ReportingPageDonate />
    </>
  );
};

export default ReportingPage;
