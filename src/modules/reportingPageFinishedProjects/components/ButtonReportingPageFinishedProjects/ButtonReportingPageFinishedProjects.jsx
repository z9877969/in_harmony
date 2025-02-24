'use client';

import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/components';

import { useCurrentIndexWithIsDesktop } from '../../hooks/useCurrentIndexWithIsDesktop.js';

import s from './ButtonReportingPageFinishedProjects.module.scss';

const ButtonReportingPageFinishedProjects = ({ contentLength }) => {
  const { handleClick } = useCurrentIndexWithIsDesktop(contentLength);
  const { t } = useTranslation('reportingPage');

  return (
    <>
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
    </>
  );
};

export default ButtonReportingPageFinishedProjects;
