'use client';

import { useId } from 'react';
import s from './Input.module.scss';

const Input = ({
  data,
  type,
  label,
  error,
  currency = '',
  className,
  labelClass = '',
  ...rest
}) => {
  const id = useId();

  const inputClasses = `${s.input} ${className}`;
  const labelClasses = `${s.label} ${labelClass}`;

  return (
    <div className={s.inputContainer}>
      {label && (
        <label className={labelClasses} htmlFor={id}>
          {label}
        </label>
      )}
      <input className={inputClasses} id={id} type={type} {...rest} />
      {currency && <span className={s.currency}>{currency}</span>}
      {error && <p className={s.error}>{error} </p>}
    </div>
  );
};

export default Input;
