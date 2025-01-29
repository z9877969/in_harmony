import React from 'react';
import CollectionsCard from '../ActiveCollectionsCard/ActiveCollectionsCard';
import { ACTIVE_COLLECTION_LIST } from '../constants';
import s from './ActiveCollectionList.module.scss';

const CollectionList = ({ visibleItems }) => {
  return (
    <>
      <ul className={s.collectionList}>
        {ACTIVE_COLLECTION_LIST.slice(0, visibleItems).map((collection) => (
          <li key={collection._id}>
            <CollectionsCard collection={collection} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CollectionList;
