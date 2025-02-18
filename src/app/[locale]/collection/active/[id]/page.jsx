import { OpenCollectionGoal } from '@/modules/openCollectionGoal';
import { OpenCollectionOther } from '@/modules/openCollectionOther';
import { OpenCollectionPageHero } from '@/modules/openCollectionPageHero';
import { insideServerApi as api } from '@/shared/services';
// import s from './page.module.scss';

const CollectionPage = async ({ params: { locale, id } }) => {
  const collectionData = await api.getActiveCollectionPageApi(locale, id);

  return (
    <>
      <OpenCollectionPageHero content={collectionData} />
      <OpenCollectionGoal />
      <OpenCollectionOther content={collectionData} />
    </>
  );
};

export default CollectionPage;
