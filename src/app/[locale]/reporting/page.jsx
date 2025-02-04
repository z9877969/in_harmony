import { ReportingPageFilters } from '@/modules/reportingPageFilters/index.js';
import { ReportingPageDonate } from '@/modules/reportingPageDonate';
import { ReportingPageFinishedProjects } from '@/modules/reportingPageFinishedProjects';
import s from './page.module.scss';

const ReportingPage = () => {
  return (
    <>
      <h1 className={s.title}>ReportingPage</h1>
      <ReportingPageFilters />
      <ReportingPageFinishedProjects />
      <ReportingPageDonate />
    </>
  );
};

export default ReportingPage;
