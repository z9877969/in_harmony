import { Icon } from '@/shared/components';
import s from './TeamPersonCard.module.scss';

const TeamPersonCard = ({ icon, name, role, description }) => {
  return (
    <div className={s.card}>
      <section className={s.info}>
        <div className={s.icon}>
          <Icon className={s[icon]} iconName={icon} />
        </div>
        <div className={s.title}>
          <p>{name}</p>
          <span>{role}</span>
        </div>
      </section>
      <section className={s.description}>{description}</section>
    </div>
  );
};

export default TeamPersonCard;
