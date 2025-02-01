import { Icon } from '@/shared/components';
import s from './ActivitiesCard.module.scss';

const ActivitiesCard = ({ icon, title, description }) => {
  return (
    <div className={s.card}>
      <section className={s.icon}>
        <Icon className={`${s.iconDefault} ${s[icon]}`} iconName={icon} />
      </section>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ActivitiesCard;
