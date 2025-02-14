import { DiscardHelpPageForm } from '@/modules/discardHelpPageForm';
import { DiscardHelpPageHero } from '@/modules/discardHelpPageHero';
import { insideServerApi as api } from '@/shared/services';

const DiscardHelpPage = async ({ params: { locale } }) => {
  const { sectionsDict } = await api.getPageApi({
    locale,
    page: 'discard',
  });
  const pages = await api.getAllPages({ locale });

  // eslint-disable-next-line
  console.log('sectionsDict >> ', sectionsDict);
  // eslint-disable-next-line
  console.log('pages :>> ', pages);
  return (
    <>
      <DiscardHelpPageHero content={sectionsDict} />
      <DiscardHelpPageForm />
    </>
  );
};

export default DiscardHelpPage;
