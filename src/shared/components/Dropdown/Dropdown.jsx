'use client';

import { useState } from 'react';
import { Icon } from '..';
import s from './Dropdown.module.scss';

const Dropdown = ({ onSelect, collections, option }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const arrowName = isDropdownOpen ? 'icon-arrow-up' : 'icon-arrow-down';

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSelect = (option) => {
    onSelect(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className={s.container}>
      <button className={s.button} onClick={toggleDropdown} type="button">
        {option.title}
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
                <button className={s.select} onClick={() => handleSelect(el)}>
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
