'use client';

import clsx from 'clsx';
import { useId } from 'react';
import s from './InputArea.module.scss';

const InputArea = ({
  label,
  className,
  rows = 4,
  name = 'message',
  ...props
}) => {
  const id = useId();
  const textAreaClass = clsx(s['textArea'], s[className]);

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
    </div>
  );
};

export default InputArea;
