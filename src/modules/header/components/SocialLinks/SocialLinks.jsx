import { Icon } from '@/shared/components';

import s from './SocialLinks.module.scss';
import { SOCIALROUTES } from '@/shared/constants';

const SocialLinks = () => {
  return (
    <ul className={s.socials}>
      <li>
        <a
          href={SOCIALROUTES.INSTAGRAM}
          className={s.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconName="icon-instagram" className={s.socialsIcon} />
        </a>
      </li>
      <li>
        <a
          href={SOCIALROUTES.TELEGRAM}
          className={s.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconName="icon-telegram" className={s.socialsIcon} />
        </a>
      </li>
      <li>
        <a
          href={SOCIALROUTES.FACEBOOK}
          className={s.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconName="icon-facebook" className={s.socialsIcon} />
        </a>
      </li>
      <li>
        <a
          href={SOCIALROUTES.YOUTUBE}
          className={s.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconName="icon-youTube" className={s.socialsIcon} />
        </a>
      </li>
      <li>
        <a
          href={SOCIALROUTES.TIKTOK}
          className={s.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconName="icon-tiktok" className={s.socialsIcon} />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
