'use client';

import clsx from 'clsx';
import { useId } from 'react';
import s from './InputArea.module.scss';

const InputArea = ({
  label,
  error,
  className = '',
  rows = 4,
  name = 'message',
  ...props
}) => {
  const id = useId();
  const textAreaClass = clsx(s.textArea, className && className);

  return (
    <div>
      {label && (
        <label className={s.label} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        className={textAreaClass}
        id={id}
        rows={rows}
        name={name}
        {...props}
      />
      {error && <p className={s.error}>{error} </p>}
    </div>
  );
};

export default InputArea;
