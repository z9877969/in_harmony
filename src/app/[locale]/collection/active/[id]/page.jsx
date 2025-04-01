import Script from 'next/script';
import { OpenCollectionGoal } from '@/modules/openCollectionGoal';
import { OpenCollectionOther } from '@/modules/openCollectionOther';
import { OpenCollectionPageHero } from '@/modules/openCollectionPageHero';
import { ROUTES } from '@/shared/constants';
import { getImageSrc } from '@/shared/helpers';
import { insideServerApi as api } from '@/shared/services';

// eslint-disable-next-line
export async function generateMetadata({ params: { locale, id } }) {
  const pageData = await api.getCollectionPageById({
    locale,
    id,
    collectionType: ROUTES.ACTIVE,
  });

  const collection = pageData.sectionsDict.collection_details.section_content;

  const isDevMode = process.env.NODE_ENV === 'development';

  return {
    openGraph: {
      title: collection.title,
      description: collection.desc,
      image: isDevMode
        ? 'https://inharmony.com.ua/_next/image?url=%2Fimages%2Fall%2FIMG_8875_sdzygp.jpg&w=1920&q=75'
        : getImageSrc(collection.image[0].path),
      type: 'website',
      url: isDevMode
        ? 'https://inharmony.com.ua/ua/collection/active/67ade06675332cf0a1061fea'
        : `${api.serverUrl}/${locale}/collection/active/${id}`,
      locale,
    },
  };
}

const ActiveCollectionPage = async ({ params: { locale, id } }) => {
  const { sectionsDict } = await api.getCollectionPageById({
    locale,
    id,
    collectionType: ROUTES.ACTIVE,
  });

  return (
    <>
      <Script
        async
        defer
        crossOrigin="anonymous"
        src={`https://connect.facebook.net/uk_UA/sdk.js#xfbml=1&version=v22.0&appId=${process.env.FACEBOOK_APP_ID}`}
      />
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
