import Image from 'next/image';
import Link from 'next/link';
import { getImageSrc } from '@/shared/helpers';
import s from './AboutPagePartnersCard.module.scss';

const AboutPagePartnersCard = ({ card }) => {
  return (
    <Link href={card.link} target="blank" className={s.link}>
      {Array.isArray(card.image) && card.image.length > 0 && (
        <div className={s.imageWrapper}>
          <Image
            src={getImageSrc(card.image[0])}
            alt={card.logo}
            priority
            fill
            sizes="100%"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      )}
      <p className={s.partnersName}>{card.logo}</p>
    </Link>
  );
};

export default AboutPagePartnersCard;
