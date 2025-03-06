'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import clsx from 'clsx';

import { Icon, Loading } from '@/shared/components/index.js';
import s from './CustomDropdown.module.scss';

const CustomDropdown = ({
  onSelect,
  onBlur,
  initialValue,
  name,
  collections,
  label,
  error,
  loading,
}) => {
  const { t } = useTranslation('forms');

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [title, setTitle] = useState(t('paymentInfo.dropdown'));
  const buttonRef = useRef(null);
  const containerRef = useRef(null);
  const arrowName = isDropdownOpen ? 'icon-arrow-up' : 'icon-arrow-down';

  const classContainer = clsx(
    s.container,
    isDropdownOpen && collections.length > 0 && s.containerOpen
  );
  const classBtn = clsx(
    s.button,
    isDropdownOpen && collections.length > 0 && s.buttonOpen
  );

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => {
      const newState = !prev;
      return newState;
    });
    requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.focus();
      }
    });
  };

  const resetDropdown = useCallback(() => {
    setTitle(t('paymentInfo.dropdown'));
    setIsDropdownOpen(false);
  }, [t]);

  const handleSelect = (option) => {
    setTitle(option.title);
    onSelect({ value: option.value, title: option.title });
    setIsDropdownOpen(false);
  };

  const handleFocus = () => {
    containerRef.current.focus();
  };

  const handleBlur = () => {
    if (onBlur) {
      const event = {
        target: { name: name },
      };
      onBlur(event);
    }
  };

  useEffect(() => {
    if (initialValue) {
      const selectedOption = collections.find(
        (option) => option.value === initialValue
      );
      if (selectedOption) {
        setTitle(selectedOption.title);
        onSelect({
          value: selectedOption.value,
          title: selectedOption.title,
        });
      } else {
        resetDropdown();
      }
    } else {
      resetDropdown();
    }
  }, [initialValue, collections, onSelect, resetDropdown]);

  return (
    <div>
      {label && (
        <label
          className={s.label}
          htmlFor="custom-dropdown"
          onClick={handleFocus}
        >
          {label}
        </label>
      )}
      <div
        id="custom-dropdown"
        className={classContainer}
        tabIndex={0}
        ref={containerRef}
        onBlur={handleBlur}
      >
        <div className={classBtn} onClick={toggleDropdown} role="button">
          <span>{title}</span>
          {loading ? (
            <Loading />
          ) : (
            <Icon
              iconName={arrowName}
              width="24"
              height="24"
              style={{ fill: 'transparent', stroke: 'black' }}
            />
          )}
        </div>
        {isDropdownOpen && collections.length > 0 && (
          <ul className={s.list}>
            {collections.map((el, idx) => (
              <li key={idx}>
                <button
                  className={s.select}
                  onClick={() => handleSelect(el)}
                  ref={
                    initialValue && el.value === initialValue ? buttonRef : null
                  }
                >
                  {el.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {error && <div className={s.error}>{error}</div>}
    </div>
  );
};

export default CustomDropdown;
