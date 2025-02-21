import { ClosedCollectionFeedbacks } from '@/modules/ClosedCollectionFeedbacks';
import { OpenCollectionPageHero as ClosedCollectionPageHero } from '@/modules/openCollectionPageHero';
import { ROUTES } from '@/shared/constants';
import { insideServerApi as api } from '@/shared/services';

// import s from './page.module.scss';
const ClosedCollectionPage = async ({ params: { locale, id } }) => {
  const { sectionsDict } = await api.getCollectionPageById({
    locale,
    id,
    collectionType: ROUTES.CLOSED,
  });

  return (
    <>
      <ClosedCollectionPageHero
        content={sectionsDict.collection_details.section_content}
      />
      <ClosedCollectionFeedbacks />
    </>
  );
};

export default ClosedCollectionPage;
