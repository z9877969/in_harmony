import Image from 'next/image';
import s from './ActiveCollections.module.scss';
import ProgressBar from '../ProgressBur/ProgressBur';

function ActiveCollections({ collection }) {
  return (
    <div className={s.ContentContainer}>
      <div className={s.collectionImg}>
        {collection.image && (
          <Image
            fill
            sizes="(max-width: 768px) 338px, (min-width: 768px) 292px, 376px"
            src={collection.image}
            alt={collection.alt}
          />
        )}
      </div>

      <p className={s.importance}>{collection.importance}</p>

      <div className={s.mainContentContainer}>
        <div className={s.contentContainer}>
          <h3 className={s.title}>{collection.title} </h3>
          <p className={s.desc}>{collection.desc}</p>
        </div>

        <ProgressBar
          collected={collection.collected}
          target={collection.target}
        />
        <p className={s.peopleDonate}>
          <span>{collection.peopleDonate}</span> донорів
        </p>
      </div>
    </div>
  );
}

export default ActiveCollections;
