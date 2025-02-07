import { CollectionPageActive } from '@/modules/collectionPageActive';
import { CollectionPageReporting } from '@/modules/collectionPageReporting';
// import s from './page.module.scss';

const CollectionPage = () => {
  return (
    <>
      <CollectionPageActive />

      <CollectionPageReporting />
    </>
  );
};

export default CollectionPage;
