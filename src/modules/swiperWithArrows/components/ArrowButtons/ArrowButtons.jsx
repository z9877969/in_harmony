'use client';
import { Icon } from '@/shared/components';
import s from './ArrowButtons.module.scss';

export const PrevButton = (props) => {
  const { children, disabled, ...restProps } = props;

  return (
    <button
      type="button"
      {...restProps}
      className={disabled ? `${s.btnDisabled}` : `${s.btnEnabled}`}
    >
      <Icon
        iconName="icon-arrow-left1"
        width="18"
        height="14"
        className={s.icon}
      />
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
      <Icon
        iconName="icon-arrow-right1"
        width="18"
        height="14"
        className={s.icon}
      />

      {children}
    </button>
  );
};
