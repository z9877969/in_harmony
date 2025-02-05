import { ClosedCollectionFeedbacks } from '@/modules/ClosedCollectionFeedbacks';
import { OpenCollectionOther } from '@/modules/openCollectionOther';
import { OpenCollectionPageHero } from '@/modules/openCollectionPageHero';
// import s from './page.module.scss';

const CollectionPage = () => {
  return (
    <>
      <OpenCollectionPageHero />
      <OpenCollectionOther />
      <ClosedCollectionFeedbacks />
    </>
  );
};

export default CollectionPage;
