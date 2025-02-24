import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const isId = (segment) => /^[a-f0-9]{24}$/i.test(segment);

const usePageTitle = (pathSegments, titles) => {
  const { t } = useTranslation('breadcrumbs');

  useEffect(() => {
    const firstSegment = pathSegments[0];

    const translatedSegment = t(firstSegment, { defaultValue: firstSegment });

    const segmentName =
      isId(firstSegment) && titles[firstSegment]
        ? titles[firstSegment]
        : translatedSegment;

    document.title =
      pathSegments.length > 0 ? `In Harmony | ${segmentName}` : `In Harmony`;
  }, [pathSegments, titles, t]);
};

export default usePageTitle;
