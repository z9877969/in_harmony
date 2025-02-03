import React from 'react';
import clsx from 'clsx';
import { ActiveCollectionsCard } from '@/modules/mainPageCollection';
import s from './ActiveCollectionList.module.scss';

const ActiveCollectionList = ({ visibleItems, collection, className }) => {
  const collections = collection.collections;

  return (
    <ul className={clsx(s.collectionList, className)}>
      {collections.slice(0, visibleItems).map((collection) => (
        <li key={collection._id}>
          <ActiveCollectionsCard collection={collection} />
        </li>
      ))}
    </ul>
  );
};

export default ActiveCollectionList;
