import { CollectionPageActive } from '@/modules/collectionPageActive/index.js';
import { CollectionPageReporting } from '@/modules/collectionPageReporting/index.js';

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
