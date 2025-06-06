'use client';

import dynamic from 'next/dynamic';

import { useCurrentIndexWithIsDesktop } from '../../hooks/useCurrentIndexWithIsDesktop';

const FinishedProjectsList = dynamic(
  () => import('../FinishedProjectsList/FinishedProjectsList.jsx'),
  { ssr: false }
);
const ButtonReportingPageFinishedProjects = dynamic(
  () =>
    import(
      '../ButtonReportingPageFinishedProjects/ButtonReportingPageFinishedProjects'
    ),
  { ssr: false }
);

const ProjectsList = ({ cards }) => {
  const { currentIndex, handleClick, isShowAllCards } =
    useCurrentIndexWithIsDesktop(cards.length);
  const shouldShowButton = cards.length > 4;

  const showingCards = cards.slice(0, currentIndex);

  return (
    <>
      <FinishedProjectsList data={showingCards} contentLength={cards.length} />
      {shouldShowButton && !isShowAllCards && (
        <ButtonReportingPageFinishedProjects
          contentLength={cards.length}
          handleClick={handleClick}
        />
      )}
    </>
  );
};

export default ProjectsList;
