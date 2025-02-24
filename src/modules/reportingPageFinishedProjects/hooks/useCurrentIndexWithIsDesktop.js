import { useState, useEffect } from 'react';

export const useCurrentIndexWithIsDesktop = ({ contentLength }) => {
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

  const handleClick = () => {
    if (isDesktop && currentIndex <= contentLength) {
      setCurrentIndex((prevState) => prevState + 3);
    } else if (!isDesktop && currentIndex <= contentLength) {
      setCurrentIndex((prevState) => prevState + 2);
    } else {
      setCurrentIndex(contentLength);
    }
  };

  return { handleClick, currentIndex };
};
