import { CollectionPageActive } from '@/modules/collectionPageActive';
import OpenCollectionGoal from '@/modules/collectionPageActive/components/OpenCollectionGoal/OpenCollectionGoal.jsx';
import s from './page.module.scss';

const CollectionPage = () => {
  return (
    <>
      <h1 className={s.title}>CollectionPage</h1>
      <CollectionPageActive />
      <OpenCollectionGoal />
      <h2>collectionPageReporting</h2>
    </>
  );
};

export default CollectionPage;
