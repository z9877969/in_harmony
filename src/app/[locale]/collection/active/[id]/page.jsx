import { OpenCollectionGoal } from '@/modules/openCollectionGoal';
import { OpenCollectionOther } from '@/modules/openCollectionOther';
import { OpenCollectionPageHero } from '@/modules/openCollectionPageHero';
import { ROUTES } from '@/shared/constants';
import { insideServerApi as api } from '@/shared/services';
// import s from './page.module.scss';

const ActiveCollectionPage = async ({ params: { locale, id } }) => {
  const { sectionsDict } = await api.getCollectionPageById({
    locale,
    id,
    collectionType: ROUTES.ACTIVE,
  });

  return (
    <>
      <OpenCollectionPageHero
        content={sectionsDict.collection_details.section_content}
      />
      <OpenCollectionGoal content={sectionsDict.together.section_content} />
      <OpenCollectionOther
        id={id}
        content={sectionsDict.active_collections.section_content}
      />
    </>
  );
};

export default ActiveCollectionPage;
