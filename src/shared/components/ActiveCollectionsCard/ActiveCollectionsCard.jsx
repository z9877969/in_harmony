'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
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
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  return (
    <div className={s.ContentContainer}>
      <div className={s.imageWrapper}>
        <Image
          className={s.image}
          src={lightDesktop.src}
          alt={collection.title}
          fill
          priority
          sizes="100%"
          srcSet={`
            ${lightMobil.src} 320w,
            ${lightMobil2x.src} 640w,
            ${lightTablet.src} 768w,
            ${lightTablet2x.src} 1536w,
            ${lightDesktop.src} 1440w,
            ${lightDesktop2x.src} 2880w
          `}
        />
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
              router.push(`/${locale}/${ROUTES.COLLECTION}/${collection._id}`)
            }
          >
            {buttonDetails}
          </Button>
          <Button
            onClick={() => router.push(`/${locale}/${ROUTES.PAYMENTS}`)}
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
