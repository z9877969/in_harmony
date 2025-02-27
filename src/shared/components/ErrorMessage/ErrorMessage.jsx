import { Icon } from '../index.js';
import s from './ErrorMessage.module.scss';

const ErrorMessage = ({ error, onClose }) => {
  if (!error) return null;

  return (
    <div className={s.messageContainer}>
      <button className={s.closeBtn} type="button" onClick={onClose}>
        <Icon iconName="icon-cross-line" className={s.iconX} />
      </button>
      <p className={s.error}>{error}</p>
    </div>
  );
};

export default ErrorMessage;
