import React from 'react';
import clsx from 'clsx';
import { ActiveCollectionsCard } from '@/shared/components';
import s from './ActiveCollectionList.module.scss';
import collectionBtn from '../../data/section-content.json';

const ActiveCollectionList = ({ visibleItems, allCollection, className }) => {
  return (
    <ul className={clsx(s.collectionList, className)}>
      {allCollection?.slice(0, visibleItems).map((collection) => (
        <li key={collection._id}>
          <ActiveCollectionsCard
            collection={collection}
            buttonDetails={collectionBtn.button_details}
            buttonDonas={collectionBtn.button_donas}
          />
        </li>
      ))}
    </ul>
  );
};

export default ActiveCollectionList;
