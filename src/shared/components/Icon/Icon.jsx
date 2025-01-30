import clsx from 'clsx';
import s from './Icon.module.scss';

const Icon = ({ iconName, className, ...props }) => {
  const iconClass = clsx(s['icon'], className);

  return (
    <svg className={iconClass} {...props}>
      <use href={`/icons/sprite.svg#${iconName}`}></use>
    </svg>
  );
};

export default Icon;
