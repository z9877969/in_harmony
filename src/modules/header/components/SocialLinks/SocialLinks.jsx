import { Icon } from '@/shared/components';

import s from './SocialLinks.module.scss';

const SocialLinks = () => {
  return (
    <ul className={s.socials}>
      <li>
        <a
          href="https://www.instagram.com"
          className={s.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconName="icon-instagram" className={s.socialsIcon} />
        </a>
      </li>
      <li>
        <a
          href="/"
          className={s.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconName="icon-telegram" className={s.socialsIcon} />
        </a>
      </li>
      <li>
        <a
          href="https://www.tiktok.com/"
          className={s.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconName="icon-tiktok" className={s.socialsIcon} />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com"
          className={s.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconName="icon-facebook" className={s.socialsIcon} />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
