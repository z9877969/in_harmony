import Icon from '@/shared/components/Icon/Icon.jsx';
import s from './SocialMediaLinks.module.scss';

const SocialMediaLinks = () => {
  return (
    <section aria-labelledby="social-media">
      <h2 id="social-media" className="visuallyHidden">
        Наші соціальні мережі
      </h2>
      <ul className={s.socialIconsList}>
        <li className={s.socialIconsItem}>
          <a
            className={s.socialIconsLink}
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
          >
            <Icon
              iconName="icon-instagram"
              width="24"
              height="24"
              style={{ fill: '#6702a1' }}
            />
          </a>
        </li>
        <li className={s.socialIconsItem}>
          <a
            className={s.socialIconsLink}
            href="https://www.telegram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="telegram"
          >
            <Icon
              iconName="icon-telegram"
              width="24"
              height="24"
              style={{ fill: '#6702a1' }}
            />
          </a>
        </li>
        <li className={s.socialIconsItem}>
          <a
            className={s.socialIconsLink}
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="tiktok"
          >
            <Icon
              iconName="icon-tiktok"
              width="24"
              height="24"
              style={{ fill: '#6702a1' }}
            />
          </a>
        </li>
        <li className={s.socialIconsItem}>
          <a
            className={s.socialIconsLink}
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="facebook"
          >
            <Icon
              iconName="icon-facebook"
              width="24"
              height="24"
              style={{ fill: '#6702a1' }}
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SocialMediaLinks;
