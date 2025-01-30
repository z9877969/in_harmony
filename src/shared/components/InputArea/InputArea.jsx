'use client';

import { useId } from 'react';
import s from './InputArea.module.scss';

const InputArea = ({ label, rows = 4, name = 'message', ...props }) => {
  const id = useId();

  return (
    <div>
      {label && (
        <label className={s.label} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        className={s.textArea}
        id={id}
        rows={rows}
        name={name}
        {...props}
      />
    </div>
  );
};

export default InputArea;
