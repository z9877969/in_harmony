import { Icon } from '@/shared/components';

import s from './SocialLinks.module.scss';

const SocialLinks = () => {
  return (
    <ul className={s.socials}>
      <li>
        <a
          href="https://www.instagram.com/inharmony.ua"
          className={s.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconName="icon-instagram" className={s.socialsIcon} />
        </a>
      </li>
      <li>
        <a
          href="https://t.me/inharmonyua"
          className={s.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconName="icon-telegram" className={s.socialsIcon} />
        </a>
      </li>
      <li>
        <a
          href="https://www.tiktok.com/@inharmony.ua?_t=8pfFP3VEltN&_r=1"
          className={s.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconName="icon-tiktok" className={s.socialsIcon} />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/inharmony.com.ua"
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
