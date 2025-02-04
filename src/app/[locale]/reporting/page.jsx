import { ReportingPageDonate } from '@/modules/reportingPageDonate';
import { ReportingPageFinishedProjects } from '@/modules/reportingPageFinishedProjects';
import s from './page.module.scss';

const ReportingPage = () => {
  return (
    <>
      <h1 className={s.title}>ReportingPage</h1>
      <h2>ReportingPageFilters</h2>
      <ReportingPageFinishedProjects />
      <ReportingPageDonate />
    </>
  );
};

export default ReportingPage;
