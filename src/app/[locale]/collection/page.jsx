import { CollectionPageActive } from '@/modules/collectionPageActive';
import s from './page.module.scss';

const CollectionPage = () => {
  return (
    <>
      <h1 className={s.title}>CollectionPage</h1>
      <CollectionPageActive />
      <h2>collectionPageReporting</h2>
    </>
  );
};

export default CollectionPage;
