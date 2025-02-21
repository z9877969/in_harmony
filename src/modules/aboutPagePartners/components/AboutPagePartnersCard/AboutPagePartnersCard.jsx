import Image from 'next/image';
import s from './AboutPagePartnersCard.module.scss';
import Link from 'next/link';
const AboutPagePartnersCard = ({ cards }) => {
  return (
    <Link href={cards.link} target="blank" className={s.link}>
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
      <p className={s.partnersName}>{cards.logo}</p>
    </Link>
  );
};

export default AboutPagePartnersCard;
