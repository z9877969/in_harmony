'use client';

import { useId } from 'react';
import s from './Input.module.scss';

const Input = ({ type, label }) => {
  const id = useId();
  return (
    <div>
      {label && (
        <label className={s.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input className={s.input} id={id} type={type} />
    </div>
  );
};

export default Input;
