'use client';

import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/components';
import s from './ButtonReportingPageFinishedProjects.module.scss';

const ButtonReportingPageFinishedProjects = ({ handleClick }) => {
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
