import Image from 'next/image';
import CardQuantityComments from './CardQuantityComments/CardQuantityComments';
import ProjectDetailsButton from './ProjectDetailsButton/ProjectDetailsButton';
import { getImageSrc } from '@/shared/helpers';
import s from './CardProjectReporting.module.scss';

export default function CardProjectReporting({ slid }) {
  const {
    _id,
    image,
    // alt,
    title,
    collected_title,
    target,
    currency,
    term,
    days,
    period,
    comments,
    quantity,
  } = slid;

  // comments;

  return (
    <div className={s.list}>
      <div className={s.slide}>
        <div className={s.overlay}>
          <Image
            className={s.image}
            src={image && image[0] && getImageSrc(image[0])}
            alt={title + 'image'}
            height={400}
            width={400}
            priority
            placeholder="blur"
            blurDataURL="/images/blur-placeholder.jpg"
          />
          {/* <DotsSwiper
            customSwiper={s.customSwiper}
            totalSlides={3}
            slideCount={2}
          >
            {image.map((el, idx) => (
              <SwiperSlide key={idx}>
                <ActiveCollectionsCard collection={el} />
              </SwiperSlide>
            ))}
          </DotsSwiper> */}

          <div className={s.wrapper}>
            <h3 className={s.title}>{title}</h3>
            <p className={s.text}>
              <span className={s.preTitle}>{collected_title}:</span>
              &#8197;
              <span>{target}</span> &#8197;
              <span>{currency}</span>
            </p>
            <p className={s.text}>
              <span className={s.preTitle}>{term}</span>
              &#8197;
              {days} &#8197;
              {period}
            </p>
            <p className={s.text}>
              <span className={s.preTitle}>{comments}</span>
              &#8197;
              <CardQuantityComments quantity={quantity} />
            </p>
          </div>
        </div>
        <ProjectDetailsButton id={_id} />
      </div>
    </div>
  );
}
