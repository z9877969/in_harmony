'use client';
import s from './ArrowButtons.module.scss';

export const PrevButton = (props) => {
  const { children, disabled, ...restProps } = props;

  return (
    <button
      type="button"
      {...restProps}
      className={disabled ? `${s.btnDisabled}` : `${s.btnEnabled}`}
    >
      <svg width="18" height="14" fill="none">
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16.5 7h-15m0 0 5.625 6M1.5 7l5.625-6"
        />
      </svg>
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, disabled, ...restProps } = props;

  return (
    <button
      type="button"
      {...restProps}
      className={disabled ? `${s.btnDisabled}` : `${s.btnEnabled}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="14"
        fill="none"
      >
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1.5 7h15m0 0-5.625-6M16.5 7l-5.625 6"
        />
      </svg>
      {children}
    </button>
  );
};
