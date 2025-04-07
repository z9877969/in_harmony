// 'use client';

import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import { useTranslation } from 'react-i18next';
// import { Icon } from '@/shared/components';
import OpenCollectionPageBadge from '@/modules/openCollectionPageHero/components/openCollectionPageBadge/openCollectionPageBadge.jsx';
import { CollectionProgress } from '@/modules/mainPageCollection';
import LinkButton from '../LinkButton/LinkButton.jsx';
// import { getDonorText } from '../../helpers/getDonorText.js';
import { getImageSrc } from '@/shared/helpers/getImageSrc.js';
import { LINKDATA, ROUTES } from '@/shared/constants';
import s from './ActiveCollectionsCard.module.scss';
import PeopleDonate from '../PeopleDonate/PeopleDonate.jsx';

function ActiveCollectionsCard({ collection }) {
  // const pathname = usePathname();
  // const locale = pathname.split('/')[1];
  // const { t } = useTranslation('activeCollectionCard');

  return (
    <div className={s.shadow}>
      <div className={s.content}>
        <div className={s.imageWrapper}>
          <Image
            className={s.image}
            src={getImageSrc(collection.image[0])}
            alt={collection.title + 'image'}
            fill
            quality={75}
            priority
            sizes="100%"
            placeholder="blur"
            blurDataURL="/images/blur-placeholder.jpg"
          />
        </div>
        <OpenCollectionPageBadge importance={collection.importance} />

        <div className={s.mainContentContainer}>
          <div className={s.contentContainer}>
            <h3 className={s.title}>{collection.title}</h3>
            <p className={s.desc}>{collection.desc}</p>
          </div>
          <CollectionProgress
            collectedTitle={collection.collected_title}
            targetTitle={collection.target_title}
            collected={collection.collected}
            target={collection.target}
          />
          {/* <p className={s.peopleDonate}>
            <Icon iconName="icon-people" className={s.collectionIcon} />
            <span>{collection.peopleDonate}</span>
            {` ${getDonorText(collection.peopleDonate, locale)}`}
          </p> */}
          <PeopleDonate textContent={collection.peopleDonate} />
          <div className={s.buttonContainer}>
            <LinkButton
              // path={`/${ROUTES.COLLECTION}/active/${collection._id}`}
              // linkText={t('button_details')}
              type={LINKDATA.TYPE_LIGHT_BORDER}
              relativePath={`/${ROUTES.COLLECTION}/active/${collection._id}`}
              translatorBlock="activeCollectionCard"
              translatorPath="button_details"
            />
            <LinkButton
              // path={`/${ROUTES.PAYMENTS(1)}?value=${collection.value}`}
              // linkText={t('button_donats')}
              type={LINKDATA.TYPE_DARK_HEART}
              relativePath={`/${ROUTES.PAYMENTS(1)}?value=${collection.value}`}
              translatorBlock="activeCollectionCard"
              translatorPath="button_donats"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveCollectionsCard;
