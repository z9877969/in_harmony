import { OpenCollectionGoal } from '@/modules/openCollectionGoal/index.js';
import { OpenCollectionOther } from '@/modules/openCollectionOther';
import { OpenCollectionPageHero } from '@/modules/openCollectionPageHero';
import { insideServerApi as api } from '@/shared/services';
// import s from './page.module.scss';

const CollectionPage = async ({ params: { locale } }) => {
  const { sectionsDict } = await api.getPageApi({
    locale,
    page: 'collection',
  });
  const pages = await api.getAllPages({ locale });

  // eslint-disable-next-line
  console.log('sectionsDict collection:>> ', sectionsDict);
  // eslint-disable-next-line
  console.log('pages :>> ', pages);
  return (
    <>
      <OpenCollectionPageHero
        content={sectionsDict.active_collections.section_content}
      />
      <OpenCollectionGoal />
      <OpenCollectionOther />
    </>
  );
};

export default CollectionPage;
