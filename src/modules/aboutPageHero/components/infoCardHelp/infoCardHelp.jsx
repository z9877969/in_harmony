import Icon from '@/shared/components/Icon/Icon.jsx';
import helpData from '../../data/sectionContent.json';
import s from './infoCardHelp.module.scss';

const InfoCardHelp = () => {
  return (
    <div className={s.containerCards}>
      <h2 className={s.title}>{helpData.statsTitle}</h2>
      <ul className={s.infoCards}>
        {helpData.stats.map(({ id, amount, description, iconName }) => (
          <li key={id} className={s.card}>
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
