import clsx from 'clsx';
import s from './Button.module.scss';

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  border = false,
  fontSize,
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      className={clsx(
        s.button,
        variant && s[variant],
        size && s[size],
        fontSize && s[fontSize],
        className && className,
        {
          [s.border]: border,
        }
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
