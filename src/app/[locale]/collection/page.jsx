import { CollectionPageActive } from '@/modules/collectionPageActive';
import { CollectionPageReporting } from '@/modules/collectionPageReporting';
import { insideServerApi as api } from '@/shared/services';
// import s from './page.module.scss';

const CollectionPage = async ({ params: { locale } }) => {
  const { sectionsDict } = await api.getPageApi({ locale, page: 'collection' });

  return (
    <>
      <CollectionPageActive
        content={sectionsDict.active_collections.section_content}
      />

      <CollectionPageReporting
        content={sectionsDict.closed_collections.section_content}
      />
    </>
  );
};

export default CollectionPage;
