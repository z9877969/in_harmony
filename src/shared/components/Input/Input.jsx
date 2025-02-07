'use client';

import clsx from 'clsx';
import { useId } from 'react';
import s from './Input.module.scss';

const Input = ({
  type,
  label,
  error,
  currency = '',
  className,
  labelClass = '',
  ...rest
}) => {
  const id = useId();

  const inputClasses = clsx(s.input, className && className);
  const labelClasses = clsx(s.label, labelClass && labelClass);

  return (
    <div className={s.inputContainer}>
      {label && (
        <label className={labelClasses} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={s.inputWrapper}>
        <input className={inputClasses} id={id} type={type} {...rest} />
        {currency && <span className={s.currency}>{currency}</span>}
      </div>
      {error && <p className={s.error}>{error} </p>}
    </div>
  );
};

export default Input;
