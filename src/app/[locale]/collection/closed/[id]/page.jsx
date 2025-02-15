import { ClosedCollectionFeedbacks } from '@/modules/ClosedCollectionFeedbacks';
import { OpenCollectionPageHero } from '@/modules/openCollectionPageHero';
import { insideServerApi as api } from '@/shared/services';

const CollectionPage = async ({ params: { id } }) => {
  const cardById = await api.getCollectionCardById({ id });

  return (
    <>
      <OpenCollectionPageHero
        closed={cardById.data.status}
        data={cardById.data}
      />
      <ClosedCollectionFeedbacks />
    </>
  );
};

export default CollectionPage;
