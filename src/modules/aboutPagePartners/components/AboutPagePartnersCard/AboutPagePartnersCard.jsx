import Image from 'next/image';
import Link from 'next/link';
import { getImageSrc } from '@/shared/helpers';
import s from './AboutPagePartnersCard.module.scss';

const AboutPagePartnersCard = ({ cards }) => {
  return (
    <Link href={cards.link} target="blank" className={s.link}>
      {Array.isArray(cards.image) && cards.image.length > 0 && (
        <div className={s.imageWrapper}>
          <Image
            src={getImageSrc(cards.image[0])}
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
