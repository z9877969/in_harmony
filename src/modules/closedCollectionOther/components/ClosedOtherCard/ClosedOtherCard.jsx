import Image from 'next/image';
import ProjectDetailsButton from '@/shared/components/CardProjectReporting/ProjectDetailsButton/ProjectDetailsButton.jsx';
import CardQuantityComments from '@/shared/components/CardProjectReporting/CardQuantityComments/CardQuantityComments';
import { getImageSrc } from '@/shared/helpers';
import s from './ClosedOtherCard.module.scss';

function ClosedOtherCard({ collection = {} }) {
  return (
    <div className={s.shadow}>
      <div className={s.content}>
        <div className={s.imageWrapper}>
          <Image
            className={s.image}
            src={getImageSrc(collection.image[0])}
            alt={collection.title + 'image'}
            fill
            priority
            sizes="100%"
            placeholder="blur"
            blurDataURL="/images/blur-placeholder.jpg"
          />
        </div>

        <div className={s.mainContentContainer}>
          <div className={s.contentContainer}>
            <h3 className={s.title}>{collection.title}</h3>
            <p className={s.text}>
              <span className={s.preTitle}>{collection.collected_title}:</span>
              &#8197;
              <span>{collection.target}</span> &#8197;
              <span>{collection.currency}</span>
            </p>
            <p className={s.text}>
              <span className={s.preTitle}>{collection.term}</span>
              &#8197;
              {collection.days} &#8197;
              {collection.period}
            </p>
            <p className={s.text}>
              <span className={s.preTitle}>{collection.comments}</span>
              &#8197;
              <CardQuantityComments quantity={collection.quantity} />
            </p>
          </div>

          <div className={s.buttonContainer}>
            <ProjectDetailsButton id={collection._id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClosedOtherCard;
