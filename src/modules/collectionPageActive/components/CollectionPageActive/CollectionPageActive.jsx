'use client';

import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Container, Section, SectionTitle } from '@/shared/components';
import { ActiveCollectionList } from '@/modules/mainPageCollection';

import s from './CollectionPageActive.module.scss';

const CollectionPageActive = ({ content }) => {
  const { t } = useTranslation('closedCollectionPage');
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
        <div className={s.content}>
          <SectionTitle title={title} />
          <ActiveCollectionList
            visibleItems={visibleItems}
            allCollection={cards}
          />
          {cards.length > 6 && (
            <Button
              onClick={handleToggleVisibleItems}
              className={s.button}
              size="extraLarge"
              border="true"
            >
              {isExpanded ? `${t('hide')}` : `${t('showMore')}`}
            </Button>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default CollectionPageActive;
