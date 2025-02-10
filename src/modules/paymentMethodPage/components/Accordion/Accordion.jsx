'use client';
import { useState } from 'react';
import Icon from '@/shared/components/Icon/Icon.jsx';
import s from './Accordion.module.scss';

const Accordion = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${s.accordion} ${isOpen ? s.open : ''}`}>
      <button className={s.button} onClick={() => setIsOpen(!isOpen)}>
        {label}
        <Icon
          iconName={isOpen ? 'icon-arrow-up-circle' : 'icon-arrow-down-circle'}
          width="24"
          height="24"
          className={`${s.icon} ${isOpen ? s.iconOpen : ''}`}
        />
      </button>

      {isOpen && <div className={s.content}>{children}</div>}
    </div>
  );
};

export default Accordion;
