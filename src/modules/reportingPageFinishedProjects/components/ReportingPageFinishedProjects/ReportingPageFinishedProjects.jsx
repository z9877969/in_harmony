'use client';

import React from 'react';
import { useEffect, useState } from 'react';

import { Button, Container, SectionTitle } from '@/shared/components';
import FinishedProjectsList from '../FinishedProjectsList/FinishedProjectsList';
import { useTranslation } from 'react-i18next';

import s from './ReportingPageFinishedProjects.module.scss';

export default function ReportingPageFinishedProjects({ content }) {
  const { t } = useTranslation('reportingPage');
  const [isDesktop, setIsDesktop] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(4);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      setIsDesktop(width >= 1440);
      setCurrentIndex(width >= 1440 ? 6 : 4);

      const handleResize = () => {
        const width = window.innerWidth;
        setIsDesktop(width >= 1440);
        setCurrentIndex(width >= 1440 ? 6 : 4);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  if (isDesktop === null) {
    return <div>Loading...</div>;
  }

  const shouldShowButton = isDesktop
    ? content.cards.length > 6
    : content.cards.length > 4;

  const handleClick = () => {
    if (isDesktop && currentIndex <= content.length) {
      setCurrentIndex((prevState) => prevState + 3);
    } else if (!isDesktop && currentIndex <= content.length) {
      setCurrentIndex((prevState) => prevState + 2);
    } else {
      setCurrentIndex(content.length);
    }
  };

  return (
    <section className={s.section}>
      <Container>
        <SectionTitle title={content.title} className={s.title} />

        <FinishedProjectsList
          data={content.cards}
          currentIndex={currentIndex}
        />

        {shouldShowButton && (
          <div className={s.btnWrapper}>
            <Button
              variant="secondary"
              border="true"
              className={s.button}
              onClick={handleClick}
            >
              {t('textBtn')}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
