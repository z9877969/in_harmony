import clsx from 'clsx';
import s from './InfoCardsList.module.scss';

const InfoCardsList = ({ infoCards, donateTime }) => {
  return (
    <div
      className={clsx(
        s.containerCards,
        donateTime && s.containerCardsTransition
      )}
    >
      <ul className={s.infoCards}>
        {infoCards.map(({ _id, amount, label }) => (
          <li key={_id} className={s.card}>
            <h2 className={s.amount}>{amount}</h2>
            <p className={s.label}>{label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCardsList;
