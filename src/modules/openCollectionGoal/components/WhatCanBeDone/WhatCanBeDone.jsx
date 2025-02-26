import { Icon } from '@/shared/components/index.js';
import s from './WhatCanBeDone.module.scss';

const WhatCanBeDone = ({ data, className = '' }) => {
  return (
    <section className={className}>
      <div className={s.titleContainer}>
        <Icon iconName={'icon-lamp'} className={s.icon} />
        <h3 className={s.title}>{data.title}</h3>
      </div>

      <ul className={s.list}>
        {data.whatCanBeDoneItems.map((item, index) => (
          <li className={s.item} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhatCanBeDone;
