import { DiscardHelpPageForm } from '@/modules/discardHelpPageForm';
import { DiscardHelpPageHero } from '@/modules/discardHelpPageHero';
import { insideServerApi as api } from '@/shared/services';

const DiscardHelpPage = async ({ params: { locale } }) => {
  const { sectionsDict } = await api.getPageApi({
    locale,
    page: 'discard',
  });

  return (
    <>
      <DiscardHelpPageHero content={sectionsDict} />
      <DiscardHelpPageForm />
    </>
  );
};

export default DiscardHelpPage;
