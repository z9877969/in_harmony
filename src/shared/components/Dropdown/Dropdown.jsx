'use client';

import { useState } from 'react';
import { Icon } from '..';
import s from './Dropdown.module.scss';
const collections = [
  'Збір на їжу військовим',
  'Збір на ліки для жителів села Степногірське',
  'Збір на теплий одяг для місцевих жителів',
  'Збір на воду в сіру зону',
];

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [title, setTitle] = useState('Підтримати фонд');
  const toggleDropdown = () => {
    setIsDropdownOpen(true);
  };
  const handleSelect = (text) => {
    setTitle(text);
    setIsDropdownOpen(false);
  };
  const arrowName = isDropdownOpen ? 'icon-arrow-up' : 'icon-arrow-down';
  return (
    <div className={s.container}>
      <button className={s.button} onClick={toggleDropdown}>
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
                <button className={s.select} onClick={() => handleSelect(el)}>
                  {el}
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
