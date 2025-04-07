import { Icon } from '@/shared/components/index.js';
import SocialMediaItem from '../SocialMediaItem/SocialMediaItem.jsx';
import s from './SocialMediaLinks.module.scss';

const SocialMediaLinks = ({
  data,
  title = 'Cоціальні мережі',
  listClassName = '',
  itemClassName = '',
  iconClassName = '',
}) => {
  const listClass = `${s.socialIconsList} ${listClassName}`;
  return (
    <section className={s.socialMediaSection} aria-labelledby="social-media">
      <h2 id="social-media" className="visuallyHidden">
        {title}
      </h2>
      <ul className={listClass}>
        {data &&
          data.map((socialItem, index) => (
            <SocialMediaItem
              key={index}
              className={itemClassName}
              itemName={socialItem.name}
              itemUrl={socialItem.url}
            >
              <Icon
                iconName={`icon-${socialItem.name}`}
                width="25"
                height="25"
                className={iconClassName}
              />
            </SocialMediaItem>
          ))}
      </ul>
    </section>
  );
};

export default SocialMediaLinks;
