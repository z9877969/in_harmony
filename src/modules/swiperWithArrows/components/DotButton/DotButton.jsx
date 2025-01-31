'use client';
import s from './DotButton.module.scss';

export const DotButton = (props) => {
  const { children, active, ...restProps } = props;

  return (
    <button
      type="button"
      className={active ? `${s.dotActive}` : `${s.dotBtn}`}
      {...restProps}
    >
      {children}
    </button>
  );
};
