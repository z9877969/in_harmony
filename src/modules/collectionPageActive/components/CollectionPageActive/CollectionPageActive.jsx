'use client';

import { useRef, useState } from 'react';
import { Button, Container, Section, SectionTitle } from '@/shared/components';
import { ActiveCollectionList } from '@/modules/mainPageCollection';
import collection from '../../data/section-content.json';
import s from './CollectionPageActive.module.scss';

const CollectionPageActive = ({ content }) => {
  const initialVisibleItems = 6;
  const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);
  const { cards, title } = content;
  const handleToggleVisibleItems = () => {
    if (isExpanded) {
      setVisibleItems(initialVisibleItems);

      sectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      setVisibleItems(cards.length);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <Section className={s.section} ref={sectionRef}>
      <Container>
<<<<<<< HEAD
        <div className={s.mainContainer}>
          <SectionTitle title={title} />
=======
        <div className={s.content}>
          <SectionTitle title={collection.title} />
>>>>>>> cc892a512b3e8e051ef7212776a4d18a86ebfc5f
          <ActiveCollectionList
            visibleItems={visibleItems}
            allCollection={cards}
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
    </Section>
  );
};

export default CollectionPageActive;
