import React from 'react';
import { ACTIVE_COLLECTION_LIST } from '../data';
import s from './ActiveCollectionList.module.scss';
import ActiveCollectionsCard from '../ActiveCollectionsCard/ActiveCollectionsCard';

const ActiveCollectionList = ({ visibleItems }) => {
  return (
    <>
      <ul className={s.collectionList}>
        {ACTIVE_COLLECTION_LIST.slice(0, visibleItems).map((collection) => (
          <li key={collection._id}>
            <ActiveCollectionsCard collection={collection} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ActiveCollectionList;
