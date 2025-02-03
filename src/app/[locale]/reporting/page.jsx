import { ReportingPageFilters } from '@/modules/reportingPageFilters/index.js';
import s from './page.module.scss';

const ReportingPage = () => {
  return (
    <>
      <h1 className={s.title}>ReportingPage</h1>
      <ReportingPageFilters />
      <h2>ReportingPageFinishedProjects</h2>
      <h2>ReportingPageDonate</h2>
    </>
  );
};

export default ReportingPage;
