import React from 'react';
import s from './ActiveCollectionList.module.scss';
import ActiveCollectionsCard from '../ActiveCollectionsCard/ActiveCollectionsCard';

const ActiveCollectionList = ({ visibleItems, collection }) => {
  return (
    <ul className={s.collectionList}>
      {collection.slice(0, visibleItems).map((collection) => (
        <li key={collection._id}>
          <ActiveCollectionsCard collection={collection} />
        </li>
      ))}
    </ul>
  );
};

export default ActiveCollectionList;
