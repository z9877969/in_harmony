import { Icon } from '@/shared/components/index.js';
import s from './WhatCanBeDone.module.scss';

const WhatCanBeDone = ({ className = '' }) => {
  return (
    <section className={className}>
      <div className={s.titleContainer}>
        <Icon iconName={'icon-lamp'} className={s.icon} />
        <h3 className={s.title}>Що можна зробити:</h3>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span>Поділитися </span> збором із друзями
        </li>
        <li className={s.item}>
          <span>Розказати </span>тим, кого це може зацікавити
        </li>
        <li className={s.item}>
          <span>Задонатити </span>комфортну суму
        </li>
      </ul>
    </section>
  );
};

export default WhatCanBeDone;
