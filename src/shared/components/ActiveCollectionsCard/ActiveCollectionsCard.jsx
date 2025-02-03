'use client';

import { useRouter } from 'next/navigation';
import { Button, Icon } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import {
  lightMobil,
  lightMobil2x,
  lightTablet,
  lightTablet2x,
  lightDesktop,
  lightDesktop2x,
} from '@/shared/images/active-collection';
import { CollectionProgress } from '@/modules/mainPageCollection';
import s from './ActiveCollectionsCard.module.scss';

function ActiveCollectionsCard({ collection, buttonDetails, buttonDonas }) {
  const router = useRouter();

  return (
    <div className={s.ContentContainer}>
      <div className={s.collectionImg}>
        <picture>
          <source
            srcSet={`${lightMobil.src} 1x, ${lightMobil2x.src} 2x`}
            media="(max-width: 767px)"
          />
          <source
            srcSet={`${lightTablet.src} 1x, ${lightTablet2x.src} 2x`}
            media="(max-width: 1023px)"
          />
          <source
            srcSet={`${lightDesktop.src} 1x, ${lightDesktop2x.src} 2x`}
            media="(min-width: 1024px)"
          />
          <img
            src={lightMobil.src}
            alt={collection.title}
            className={s.image}
            loading="lazy"
          />
        </picture>
      </div>

      <p className={s.importance}>{collection.importance}</p>

      <div className={s.mainContentContainer}>
        <div className={s.contentContainer}>
          <h3 className={s.title}>{collection.title} </h3>
          <p className={s.desc}>{collection.desc}</p>
        </div>
        <CollectionProgress
          collected={collection.collected}
          target={collection.target}
        />
        <p className={s.peopleDonate}>
          <Icon iconName="icon-people" className={s.collectionIcon} />
          <span>{collection.peopleDonate}</span> донорів
        </p>
        <div className={s.buttonContainer}>
          <Button
            border="true"
            size="large"
            onClick={() =>
              router.push(`/${ROUTES.COLLECTION}/${collection._id}`)
            }
          >
            {buttonDetails}
          </Button>
          <Button
            onClick={() => router.push('')}
            size="large"
            className={s.heartButton}
          >
            <Icon iconName="icon-heart" className={s.heartIcon} />
            {buttonDonas}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ActiveCollectionsCard;
