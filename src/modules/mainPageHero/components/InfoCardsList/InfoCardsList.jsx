import s from './InfoCardsList.module.scss';

const InfoCardsList = ({ infoCards }) => {
  return (
    <div className={s.containerCards}>
      <ul className={s.infoCards}>
        {infoCards.map(({ id, amount, label }) => (
          <li key={id} className={s.card}>
            <h2 className={s.amount}>{amount}</h2>
            <p className={s.label}>{label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCardsList;
