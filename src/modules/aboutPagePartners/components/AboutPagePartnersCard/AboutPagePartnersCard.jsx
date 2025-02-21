import Image from 'next/image';
import s from './AboutPagePartnersCard.module.scss';
const AboutPagePartnersCard = ({ cards }) => {
  return (
    <>
      {Array.isArray(cards.image) && cards.image.length > 0 && (
        <div className={s.imageWrapper}>
          <Image
            src={cards.image[0]}
            alt={cards.logo}
            priority
            fill
            sizes="100%"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      )}
    </>
  );
};

export default AboutPagePartnersCard;
