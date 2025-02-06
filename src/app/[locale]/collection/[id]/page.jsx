import { OpenCollectionOther } from '@/modules/openCollectionOther';
import { OpenCollectionPageHero } from '@/modules/openCollectionPageHero';
// import s from './page.module.scss';

const CollectionPage = () => {
  return (
    <>
      <OpenCollectionPageHero />
      <OpenCollectionOther />
    </>
  );
};

export default CollectionPage;
