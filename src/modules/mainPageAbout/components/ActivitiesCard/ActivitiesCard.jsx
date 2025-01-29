import s from './ActivitiesCard.module.scss';

const ActivitiesCard = ({ title, description }) => {
  return (
    <div className={s.card}>
      <section className={s.logo}></section>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ActivitiesCard;
