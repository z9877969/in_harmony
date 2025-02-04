'use client';

import { useId } from 'react';
import s from './InputArea.module.scss';

const InputArea = ({
  label,
  className = '',
  rows = 4,
  name = 'message',
  ...props
}) => {
  const id = useId();
  const textAreaClass = `${s.textArea} ${className}`;

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
