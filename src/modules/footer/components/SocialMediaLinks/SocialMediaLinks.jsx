import { Icon } from '@/shared/components/index.js';
import clsx from 'clsx';
import SocialMediaItem from '../SocialMediaItem/SocialMediaItem.jsx';
import s from './SocialMediaLinks.module.scss';

const SocialMediaLinks = ({ data, className = '' }) => {
  const classItem = clsx(s['socialIconsItem'], className && className);
  console.log('classItemS: ', className);

  return (
    <section className={s.socialMediaSection} aria-labelledby="social-media">
      <h2 id="social-media" className="visuallyHidden">
        Cоціальні мережі
      </h2>
      <ul className={s.socialIconsList}>
        {data &&
          data.map((socialItem, index) => (
            <SocialMediaItem
              className={s[className]}
              socialItem={socialItem}
              key={index}
            >
              <Icon
                iconName={`icon-${socialItem.name}`}
                width="24"
                height="24"
                className={s[className]}
              />
            </SocialMediaItem>
            // <li
            //   className={`${s['socialIconsItem']} ${s[className]}`}
            //   key={index}
            // >
            //   <a
            //     className={s.socialIconsLink}
            //     href={url}
            //     target="_blank"
            //     rel="noopener noreferrer"
            //     aria-label={name}
            //   >
            //     <Icon
            //       iconName={`icon-${name}`}
            //       width="24"
            //       height="24"
            //       className={s[className]}
            //     />
            //   </a>
            // </li>
          ))}
      </ul>
    </section>
  );
};

export default SocialMediaLinks;
