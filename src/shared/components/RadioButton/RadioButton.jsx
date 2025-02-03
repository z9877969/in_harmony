'use client';

import clsx from 'clsx';

import useSelectedOption from './hooks/useSelectedOption.js';

import s from './RadioButton.module.scss';

const RadioButton = ({ options, onChange }) => {
  const { selectedOption, handleChange } = useSelectedOption(options[0].value);

  const onOptionChange = (value) => {
    handleChange(value);
    onChange(value);
  };

  return (
    <>
      <div className={s.boxRadio}>
        {options.map((option) => (
          <button
            type="button"
            key={option.value}
            className={clsx(
              s.option,
              `${selectedOption === option.value ? s.active : ''}`
            )}
            onClick={() => onOptionChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default RadioButton;
