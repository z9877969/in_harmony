import { Icon } from '@/shared/components';

const SocialLink = ({ href, iconName, iconClassName, className }) => {
  return (
    <li>
      <a href={href} className={className}>
        <Icon iconName={iconName} className={iconClassName} />
      </a>
    </li>
  );
};

export default SocialLink;
