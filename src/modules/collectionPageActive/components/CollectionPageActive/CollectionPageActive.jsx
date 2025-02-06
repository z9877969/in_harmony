'use client';

import { useRef, useState } from 'react';
import { Button, Container, SectionTitle } from '@/shared/components';
import { ActiveCollectionList } from '@/modules/mainPageCollection';
import collection from '../../data/section-content.json';
import s from './CollectionPageActive.module.scss';

const CollectionPageActive = () => {
  const initialVisibleItems = 6;
  const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);

  const handleToggleVisibleItems = () => {
    if (isExpanded) {
      setVisibleItems(initialVisibleItems);

      sectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      setVisibleItems(collection.collections.length);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={s.section} ref={sectionRef}>
      <Container>
        <div className={s.mainContainer}>
          <SectionTitle title={collection.title} />
          <ActiveCollectionList
            visibleItems={visibleItems}
            allCollection={collection}
            className={s.list}
          />
          <Button
            onClick={handleToggleVisibleItems}
            className={s.button}
            size="extraLarge"
            border="true"
          >
            {isExpanded
              ? collection.hide_button
              : collection.all_collections_button}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CollectionPageActive;
