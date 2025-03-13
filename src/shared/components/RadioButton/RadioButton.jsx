'use client';

import clsx from 'clsx';
import s from './RadioButton.module.scss';

const RadioButton = ({ options, onChange, selctedOption }) => {
  return (
    <>
      <div className={s.boxRadio}>
        {options.map((option) => (
          <button
            type="button"
            key={option.value}
            className={clsx(
              s.option,
              clsx(option.value === selctedOption && s.active)
            )}
            onClick={() => {
              onChange(option.value);
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default RadioButton;
