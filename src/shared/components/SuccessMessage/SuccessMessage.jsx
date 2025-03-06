import { Icon } from '../index.js';
import s from './SuccessMessage.module.scss';

const SuccessMessage = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className={s.messageContainer}>
      <button className={s.closeBtn} type="button" onClick={onClose}>
        <Icon iconName="icon-cross-line" className={s.iconX} />
      </button>
      <p className={s.message}>{message}</p>
    </div>
  );
};

export default SuccessMessage;
