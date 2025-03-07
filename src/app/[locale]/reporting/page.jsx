import { ReportingPageFilters } from '@/modules/reportingPageFilters';
import { ReportingPageDonate } from '@/modules/reportingPageDonate';
import { ReportingPageFinishedProjects } from '@/modules/reportingPageFinishedProjects';
import { insideServerApi as api } from '@/shared/services';

const ReportingPage = async ({ params: { locale } }) => {
  const { sectionsDict } = await api.getPageApi({ locale, page: 'reporting' });

  return (
    <>
      <ReportingPageFilters content={sectionsDict.filters.section_content} />
      <ReportingPageFinishedProjects
        content={sectionsDict.closed_collections.section_content}
      />
      <ReportingPageDonate content={sectionsDict.donations.section_content} />
    </>
  );
};

export default ReportingPage;
