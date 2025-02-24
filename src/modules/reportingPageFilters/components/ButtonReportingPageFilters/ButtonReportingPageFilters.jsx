'use client';

import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/components/index.js';

import s from './ButtonReportingPageFilters.module.scss';

const ButtonReportingPageFilters = ({ hasMore, handleLoadMore }) => {
  const { t } = useTranslation('reportingPage');

  return (
    <>
      <Button size="border" className={s.btnReporting} onClick={handleLoadMore}>
        {hasMore ? t('textBtn') : t('textBtnClose')}
      </Button>
    </>
  );
};

export default ButtonReportingPageFilters;
