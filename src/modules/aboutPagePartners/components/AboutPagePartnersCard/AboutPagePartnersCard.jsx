import Image from 'next/image';
import { Icon } from '@/shared/components';
import s from './AboutPagePartnersCard.module.scss';
const AboutPagePartnersCard = ({ cards }) => {
  return (
    <>
      {Array.isArray(cards.image) && cards.image.length > 0 && (
        <div className={s.imageWrapper}>
          <Image
            src={cards.image[0]}
            alt={cards.logo}
            fill
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      )}
    </>
  );
};

export default AboutPagePartnersCard;
