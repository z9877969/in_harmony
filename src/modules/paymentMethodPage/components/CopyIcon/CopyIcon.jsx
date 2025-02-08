'use client';
import React, { useState } from 'react';
import Icon from '@/shared/components/Icon/Icon.jsx';
import s from './CopyIcon.module.scss';

const CopyIcon = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [copyError, setCopyError] = useState('');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setCopyError('');
    } catch (error) {
      setIsCopied(false);
      setCopyError('помилка копіювання');
    }

    setTimeout(() => {
      setIsCopied(false);
      setCopyError('');
    }, 2000);
  };

  return (
    <div className={s.containerContent}>
      <span className={s.text}>{isCopied ? 'Скопировано' : text}</span>
      <button className={s.copyIcon} onClick={handleCopy}>
        <Icon
          iconName="icon-content_copy"
          width="16"
          height="16"
          className={s.icon}
        />
      </button>
      {copyError && <p className={s.error}>{copyError}</p>}
    </div>
  );
};

export default CopyIcon;
