import { OpenCollectionOther } from '@/modules/openCollectionOther';
import s from './page.module.scss';

const CollectionPage = () => {
  return (
    <>
      <h1 className={s.title}>Collection details</h1>
      <OpenCollectionOther />
    </>
  );
};

export default CollectionPage;
