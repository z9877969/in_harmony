import { CollectionPageActive } from '@/modules/collectionPageActive';
import { CollectionPageReporting } from '@/modules/collectionPageReporting';
import { insideServerApi as api } from '@/shared/services';
// import s from './page.module.scss';

const CollectionPage = async ({ params: { locale } }) => {
    const { sectionsDict } = await api.getPageApi({
    locale,
    page: 'collection',
  });
  const pages = await api.getAllPages({ locale });

  // eslint-disable-next-line
  console.log('sectionsDict CollectionPage:>> ', sectionsDict);
  // eslint-disable-next-line
  console.log('pages :>> ', pages);
  return (
    <>
      <CollectionPageActive
        content={sectionsDict.closed_collections.section_content}
      />

      <CollectionPageReporting />
    </>
  );
};

export default CollectionPage;



