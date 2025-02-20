'use client';
import React, { useState } from 'react';
import Icon from '@/shared/components/Icon/Icon.jsx';
import s from './CopyIcon.module.scss';
import { useTranslation } from 'react-i18next';

const CopyIcon = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [copyError, setCopyError] = useState('');

  const { t } = useTranslation('copyIcon');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setCopyError('');
    } catch (error) {
      setIsCopied(false);
      setCopyError(t('copyErrorMessage'));
    }

    setTimeout(() => {
      setIsCopied(false);
      setCopyError('');
    }, 2000);
  };

  return (
    <div className={s.containerContent}>
      <span className={s.text}>{isCopied ? t('copyMessage') : text} </span>
      <button className={s.copyIcon} onClick={handleCopy}>
        <Icon
          iconName="icon-content_copy"
          width="16"
          height="16"
          className={s.icon}
        />
      </button>
      {copyError && <p className={s.error}>{copyError}</p>}{' '}
    </div>
  );
};

export default CopyIcon;
