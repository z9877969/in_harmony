import s from './infoCardHelp.module.scss';

const InfoCardHelp = ({ statsTitle, stats, IconComponent }) => {
  return (
    <div className={s.containerCards}>
      <h2 className={s.title}>{statsTitle}</h2>
      <ul className={s.infoCards}>
        {stats.map(({ id, amount, description, iconName }) => (
          <li key={id} className={s.card}>
            <IconComponent
              iconName={iconName}
              width="40"
              height="40"
              style={{ fill: '#444' }}
            />
            <h3 className={s.amount}>{amount}</h3>
            <p className={s.description}>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCardHelp;
