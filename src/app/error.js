'use client';

import { useTranslation } from 'react-i18next';

export default function GlobalError({ error, reset }) {
  const { t } = useTranslation('ErrorBoundary');

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>{t('errorTitle')}</h2>
      <p>{error?.message || t('errorMessage')}</p>
      <button
        onClick={() => {
          reset();
          window.location.reload();
        }}
      >
        {t('tryAgain')}
      </button>
    </div>
  );
}
