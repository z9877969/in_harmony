import React from 'react';
import clsx from 'clsx';
import { ActiveCollectionsCard } from '@/shared/components';
import s from './ActiveCollectionList.module.scss';

const ActiveCollectionList = ({
  visibleItems,
  allCollection,
  buttonDetails,
  buttonDonats,
  className,
}) => {
  return (
    <ul className={clsx(s.collectionList, className)}>
      {allCollection?.slice(0, visibleItems).map((collection) => (
        <li key={collection._id}>
          <ActiveCollectionsCard
            collection={collection}
            buttonDetails={buttonDetails}
            buttonDonats={buttonDonats}
          />
        </li>
      ))}
    </ul>
  );
};

export default ActiveCollectionList;
