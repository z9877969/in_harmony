import Image from 'next/image';
import { Icon } from '@/shared/components';
import s from './TeamPersonCard.module.scss';

const TeamPersonCard = ({ icon, name, role, description, image }) => {
  return (
    <div className={s.card}>
      <div className={s.info}>
        <div className={s.icon}>
          {Array.isArray(image) && image.length > 0 ? (
            <div className={s.imageWrapper}>
              <Image
                src={image[0]}
                alt="Team Photo"
                fill
                sizes="100%"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
          ) : (
            icon && <Icon className={s[icon]} iconName={icon} />
          )}
        </div>
        <div className={s.title}>
          <p>{name}</p>
          <span>{role}</span>
        </div>
      </div>
      <p className={s.description}>{description}</p>
    </div>
  );
};

export default TeamPersonCard;
