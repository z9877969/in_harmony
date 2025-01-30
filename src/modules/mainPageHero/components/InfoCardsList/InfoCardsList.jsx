import s from './InfoCardsList.module.scss';

const infoData = [
  { amount: '1 млн грн', label: 'Загальна сума зборів' },
  { amount: '8 000+', label: 'Кількість реалізованих проєктів' },
  { amount: '35 000+', label: 'Кількість врятованих життів' },
];

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
