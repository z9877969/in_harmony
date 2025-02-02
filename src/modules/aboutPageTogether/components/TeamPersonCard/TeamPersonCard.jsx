import { Icon } from '@/shared/components';
import s from './TeamPersonCard.module.scss';

const TeamPersonCard = ({ icon, name, role, description }) => {
  return (
    <div className={s.card}>
      <div className={s.info}>
        <div className={s.icon}>
          <Icon className={s[icon]} iconName={icon} />
        </div>
        <div className={s.title}>
          <p>{name}</p>
          <span>{role}</span>
        </div>
      </div>
      <p className={s.description}>{description}</p>
    </div>
  );
};

export default TeamPersonCard;
