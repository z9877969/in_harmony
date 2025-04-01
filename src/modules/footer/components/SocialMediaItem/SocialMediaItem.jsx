import s from './SocialMediaItem.module.scss';

const SocialMediaItem = ({ itemUrl, itemName, children, className = '' }) => {
  const itemClass = `${s.socialIconsItem} ${className}`;

  return (
    <div className={itemClass}>
      <a
        className={s.socialIconsLink}
        href={itemUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={itemName}
        title={itemName}
      >
        {children}
      </a>
    </div>
  );
};

export default SocialMediaItem;
