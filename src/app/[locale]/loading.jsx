'use client';

import { useEffect } from 'react';
import { Loader } from '@/shared/components';

const Loading = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.removeAttribute('style');
    };
  }, []);

  return <Loader />;
};

export default Loading;
