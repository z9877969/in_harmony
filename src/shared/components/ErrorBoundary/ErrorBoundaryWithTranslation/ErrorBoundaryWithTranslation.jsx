'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import ErrorBoundary from '../ErrorBoundary';

const ErrorBoundaryWithTranslation = (props) => {
  const { t } = useTranslation('errorBoundary');
  return <ErrorBoundary {...props} t={t} />;
};

export default ErrorBoundaryWithTranslation;
