import { ReportingPageFilters } from '@/modules/reportingPageFilters';
import { ReportingPageDonate } from '@/modules/reportingPageDonate';
import { ReportingPageFinishedProjects } from '@/modules/reportingPageFinishedProjects';

const ReportingPage = () => {
  return (
    <>
      <ReportingPageFilters />
      <ReportingPageFinishedProjects />
      <ReportingPageDonate />
    </>
  );
};

export default ReportingPage;
