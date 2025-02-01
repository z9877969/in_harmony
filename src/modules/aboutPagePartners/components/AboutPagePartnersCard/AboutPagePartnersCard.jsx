import { Icon } from '@/shared/components';
import s from './AboutPagePartnersCard.module.scss';
const AboutPagePartnersCard = ({ partners }) => {
  return (
    <div className={s.imageContainer}>
      <Icon iconName={partners.logo} className={s.icon} />
    </div>
  );
};

export default AboutPagePartnersCard;
