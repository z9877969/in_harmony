'use client';

import { clsx } from 'clsx';
import { useId } from 'react';
import s from './Input.module.scss';

const Input = ({ type, label, error, className, ...rest }) => {
  const id = useId();
  const inputClass = clsx(s['input'], className && className);

  return (
    <div>
      {label && (
        <label className={s.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input className={inputClass} id={id} type={type} {...rest} />
      {error && <p className={s.error}>{error} </p>}
    </div>
  );
};

export default Input;
