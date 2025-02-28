import s from './SocialMediaItem.module.scss';

const SocialMediaItem = ({ socialItem, children, className = '' }) => {
  const itemClass = `${s.socialIconsItem} ${className}`;

  return (
    <div className={itemClass}>
      <a
        className={s.socialIconsLink}
        href={socialItem.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={socialItem.name}
        title={socialItem.name}
      >
        {children}
      </a>
    </div>
  );
};

export default SocialMediaItem;
