'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';

import { Icon } from '..';

import s from './Dropdown.module.scss';

const Dropdown = ({ onSelect, initialValue, collections }) => {
  const { t } = useTranslation('forms');

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [title, setTitle] = useState(t('paymentInfo.dropdown'));
  const buttonRef = useRef(null);

  useEffect(() => {
    if (initialValue) {
      const selectedOption = collections.find(
        (option) => option.value === initialValue
      );
      if (selectedOption) {
        setTitle(selectedOption.title);
        if (buttonRef.current) {
          buttonRef.current.click();
        }
      }
    }
  }, [initialValue, collections]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSelect = (title) => {
    setTitle(title);
    onSelect(title);
    setIsDropdownOpen(false);
  };

  const arrowName = isDropdownOpen ? 'icon-arrow-up' : 'icon-arrow-down';

  return (
    <div className={s.container}>
      <button className={s.button} onClick={toggleDropdown} type="button">
        {title}
        <Icon
          iconName={arrowName}
          width="24"
          height="24"
          style={{ fill: 'transparent', stroke: 'black' }}
        />
      </button>
      {isDropdownOpen && (
        <div>
          <ul className={s.list}>
            {collections.map((el, idx) => (
              <li key={idx}>
                <button
                  className={s.select}
                  onClick={() => handleSelect(el.title)}
                  ref={
                    initialValue && el.title === initialValue ? buttonRef : null
                  }
                >
                  {el.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
