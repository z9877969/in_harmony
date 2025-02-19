import { OpenCollectionGoal } from '@/modules/openCollectionGoal';
import { OpenCollectionOther } from '@/modules/openCollectionOther';
import { OpenCollectionPageHero } from '@/modules/openCollectionPageHero';
import { insideServerApi as api } from '@/shared/services';
// import s from './page.module.scss';

const CollectionPage = async ({ params: { locale, id } }) => {
  const collectionData = await api.getActiveCollectionPageApi(locale, id);

 
  return (
    <>
      <OpenCollectionPageHero
        content={collectionData.data[0].section_content}
      />
      <OpenCollectionGoal />
      <OpenCollectionOther id={id} content={collectionData.data[2].section_content} />
    </>
  );
};

export default CollectionPage;
