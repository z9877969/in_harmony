import clsx from 'clsx';
import { Icon } from '../index.js';
import s from './ErrorMessage.module.scss';

const ErrorMessage = ({ error, onClose, className }) => {
  if (!error) return null;

  const messageContainer = clsx(s.messageContainer, className && className);
  return (
    <div className={messageContainer}>
      <button className={s.closeBtn} type="button" onClick={onClose}>
        <Icon iconName="icon-cross-line" className={s.iconX} />
      </button>
      <p className={s.error}>{error}</p>
    </div>
  );
};

export default ErrorMessage;
