import s from './infoCardHelp.module.scss';
import helpData from '../data/helpData.json';
import Icon from '@/shared/components/Icon/Icon.jsx';

const InfoCardHelp = () => {
  return (
    <div className={s.containerCards}>
      <h2 className={s.title}>Те, що ми вже зробили разом</h2>
      <ul className={s.infoCards}>
        {helpData.stats.map(({ amount, description, iconName }, index) => (
          <li key={index} className={s.card}>
            <Icon
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
