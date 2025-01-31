'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button, Icon } from '@/shared/components';
import { CollectionProgress } from '@/modules/mainPageCollection';
import collections from '../../data/collections.json';
import s from './ActiveCollectionsCard.module.scss';

function ActiveCollectionsCard({ collection }) {
  const router = useRouter();

  return (
    <div className={s.ContentContainer}>
      <div className={s.collectionImg}>
        {collection.image && (
          <Image
            fill
            sizes="(max-width: 768px) 338px, (min-width: 768px) 292px, 376px"
            src={collection.image}
            alt={collection.alt}
          />
        )}
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
            onClick={() => router.push(`/collection/${collection._id}`)}
          >
            {collections.button_details}
          </Button>
          <Button onClick={() => router.push('')} size="large">
            {collections.button_donas}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ActiveCollectionsCard;
