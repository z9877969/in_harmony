import { OpenCollectionGoal } from '@/modules/openCollectionGoal';
import { OpenCollectionOther } from '@/modules/openCollectionOther';
import { OpenCollectionPageHero } from '@/modules/openCollectionPageHero';
// import s from './page.module.scss';

const CollectionPage = () => {
  return (
    <>
      <OpenCollectionPageHero />
      <OpenCollectionGoal />
      <OpenCollectionOther />
    </>
  );
};

export default CollectionPage;
