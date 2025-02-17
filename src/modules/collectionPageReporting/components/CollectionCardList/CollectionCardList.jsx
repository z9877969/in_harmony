import { CardProjectReporting } from '@/shared/components';
import s from './CollectionCardList.module.scss';

export default function CollectionCardList({ data, visibleItems }) {

  return (
    <div className={s.main}>
      <div className={s.container}>
        {data.cards.slice(0, visibleItems).map((slid) => (
          <CardProjectReporting
            slid={slid}
            key={slid.id}
            className={s.listItem}
          />
        ))}
      </div>
    </div>
  );
}
