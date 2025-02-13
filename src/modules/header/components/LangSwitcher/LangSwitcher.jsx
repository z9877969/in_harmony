'use client';

import { useState } from 'react';
import { useLanguageChanger } from '@/i18n/utils/LanguageChanger';

import { uaFlag as UaIcon, googleLogo as EnIcon } from '/public/icons';
import { Icon } from '@/shared/components';

import s from './LangSwitcher.module.scss';
import { LANGUAGES } from '@/shared/constants';

const LangSwitcher = () => {
  const { currentLocale, handleChangeLanguage } = useLanguageChanger();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleLanguageSelect = (newLocale) => {
    handleChangeLanguage(newLocale);
    setIsDropdownOpen(false);
  };

  return (
    <div className={s.langBlock}>
      <button className={s.langBtn} onClick={toggleDropdown}>
        {currentLocale === LANGUAGES.UA ? (
          <UaIcon className={s.langIcon} />
        ) : (
          <EnIcon className={s.langIcon} />
        )}
        <Icon className={s.langBtnIcon} iconName="icon-chevron-down" />
      </button>

      {isDropdownOpen && (
        <div className={s.dropdown}>
          <ul>
            <li
              onClick={() => handleLanguageSelect(LANGUAGES.UA)}
              className={`${s.languageItem} ${currentLocale === LANGUAGES.UA ? s.selected : ''}`}
            >
              <UaIcon className={s.langIcon} />
              <span>UA</span>
            </li>
            <li
              onClick={() => handleLanguageSelect(LANGUAGES.EN)}
              className={`${s.languageItem} ${currentLocale === LANGUAGES.EN ? s.selected : ''}`}
            >
              <EnIcon className={s.langIcon} />
              <span>EN</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;
