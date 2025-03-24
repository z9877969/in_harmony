import dynamic from 'next/dynamic';
import { CollectionPageReporting } from '@/modules/collectionPageReporting';
import { insideServerApi as api } from '@/shared/services';
import s from './page.module.scss';

const CollectionPageActive = dynamic(
  () =>
    import(
      '@/modules/collectionPageActive/components/CollectionPageActive/CollectionPageActive'
    ),
  { ssr: false, loading: () => <div className={s.activePlaceholder} /> }
);



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
