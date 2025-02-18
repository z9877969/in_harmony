'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Icon } from '@/shared/components';
import { LINKDATA, ROUTES } from '@/shared/constants';
import { CollectionProgress } from '@/modules/mainPageCollection';
import LinkButton from '../LinkButton/LinkButton.jsx';

import s from './ActiveCollectionsCard.module.scss';

function ActiveCollectionsCard({ collection, buttonDetails, buttonDonas }) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  return (
    <div className={s.content}>
      <div className={s.imageWrapper}>
        <Image
          className={s.image}
          src={collection.imageUrl}
          alt={collection.title}
          fill
          priority
          sizes="100%"
          placeholder="blur"
          blurDataURL="/images/blur-placeholder.jpg"
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
          <LinkButton
<<<<<<< HEAD
            path={`/${locale}/${ROUTES.COLLECTION}/active/${collection._id}`}
=======
            path={`/${locale}/${ROUTES.ACTIVE_COLLECTION}/${collection._id}`}
>>>>>>> cc892a512b3e8e051ef7212776a4d18a86ebfc5f
            linkText={buttonDetails}
            type={LINKDATA.TYPE_LIGHT_BORDER}
          />
          <LinkButton
            path={`/${locale}/${ROUTES.PAYMENTS(1)}?value=${collection.value}`}
            linkText={buttonDonas}
            type={LINKDATA.TYPE_DARK_HEART}
          />
        </div>
      </div>
    </div>
  );
}

export default ActiveCollectionsCard;
