import Image from 'next/image';
import s from './CardForSwiperWhithArrow.module.scss';

const CardForSwiperWhithArrow = ({ slid }) => {
  const {
    title,
    long_desc,
    collected,
    collected_title,
    term,
    days,
    period,
    currency,
    image,
  } = slid;
  const dataImage =
    image && image.length > 0
      ? { imageUrl: image[1] }
      : { imageUrl: '/images/default_image.webp' };

  return (
    <div className={s.list}>
      <div className={s.slide}>
        <div className={s.content}>
          <div className={s.wrapper}>
            <h3 className={s.title}>{title}</h3>
            <p className={s.textNext}>{long_desc?.section1}</p>
            <p className={s.text}>
              <span className={s.preTitle}>{collected_title}:</span> {collected}{' '}
              {currency}
            </p>
            <p className={s.text}>
              <span className={s.preTitle}>{term}</span> {days} {period}
            </p>
          </div>
        </div>
        <div className={s.imgBlock}>
          <Image
            className={s.image}
            src={dataImage.imageUrl}
            alt={title}
            fill
            priority
            sizes="100%"
            placeholder="blur"
            blurDataURL="/images/blur-placeholder.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default CardForSwiperWhithArrow;
