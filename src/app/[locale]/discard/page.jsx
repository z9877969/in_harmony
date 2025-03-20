import dynamic from 'next/dynamic';

import { DiscardHelpPageHero } from '@/modules/discardHelpPageHero';
import { insideServerApi as api } from '@/shared/services';
const DiscardHelpPageForm = dynamic(
  () =>
    import(
      '@/modules/discardHelpPageForm/components/DiscardHelpPageForm/DiscardHelpPageForm'
    ),
  { ssr: false }
);

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
