import { Icon } from '@/shared/components';

import s from './MobileMenuBtn.module.scss';

import React from 'react';

const MobileMenuBtn = ({ onClick, visible }) => {
  return (
    <button className={s.mobileMenuBtn} onClick={onClick}>
      {visible ? (
        <Icon className={s.mobileMenuClose} iconName="icon-cross-line" />
      ) : (
        <Icon className={s.mobileMenuOpen} iconName="icon-menu-burger" />
      )}
    </button>
  );
};

export default MobileMenuBtn;
