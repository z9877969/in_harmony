import s from './InfoCardsList.module.scss';
import infoData from '../../data/infoData.json';

const InfoCardsList = () => {
  return (
    <div className={s.containerCards}>
      <ul className={s.infoCards}>
        {infoData.map(({ amount, label }, index) => (
          <li key={index} className={s.card}>
            <h2 className={s.amount}>{amount}</h2>
            <p className={s.label}>{label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCardsList;
