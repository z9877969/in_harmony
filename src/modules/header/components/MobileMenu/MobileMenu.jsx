import { Icon } from '@/shared/components';
import s from './MobileMenu.module.scss';

import React from 'react';

const MobileMenu = () => {
  return (
    <div className={s.logo}>
      <button className={s.mobileMenuBtn}>
        <Icon className={s.mobileMenuIcon} iconName="icon-menu-burger" />
      </button>
    </div>
  );
};

export default MobileMenu;
