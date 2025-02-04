import { CollectionPageActive } from '@/modules/collectionPageActive';
import { CollectionPageReporting } from '@/modules/collectionPageReporting';
import s from './page.module.scss';

const CollectionPage = () => {
  return (
    <>
      <h1 className={s.title}>CollectionPage</h1>
      <CollectionPageActive />
      <CollectionPageReporting />
    </>
  );
};

export default CollectionPage;
