import { ClosedCollectionFeedbacks } from '@/modules/ClosedCollectionFeedbacks';
import { ClosedCollectionOther } from '@/modules/closedCollectionOther';
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
      <ClosedCollectionFeedbacks
        content={sectionsDict.comments.section_content}
      />
      <ClosedCollectionOther
        id={id}
        content={sectionsDict.closed_collections.section_content}
      />
    </>
  );
};

export default ClosedCollectionPage;
