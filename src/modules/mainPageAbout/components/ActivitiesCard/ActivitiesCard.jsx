import s from './ActivitiesCard.module.scss';
import { Icon } from '@/shared/components';

const ActivitiesCard = ({ logo, title, description }) => {
  return (
    <div className={s.card}>
      <section className={s.logo}>
        <Icon className={s[logo]} iconName={logo} />
      </section>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ActivitiesCard;
