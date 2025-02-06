import Link from 'next/link';

import { LINKDATA } from '@/shared/constants';

import s from './LinkButton.module.scss';

const LinkButton = ({ path, linkText, type }) => {
  let linkStyle = '';
  let icon = null;

  switch (type) {
    case LINKDATA.TYPE_LIGHT_BORDER:
      linkStyle = s.border;
      break;
    case LINKDATA.TYPE_DARK_HEART:
      linkStyle = s.backGroundHeart;
      icon = (
        <svg className={s.icon}>
          <use href="/icons/sprite.svg#icon-heart"></use>
        </svg>
      );
      break;
    case LINKDATA.TYPE_LIGHT_BORDER_BF:
      linkStyle = s.borderBiggerFont;
      break;
    case LINKDATA.TYPE_DARK_BF:
      linkStyle = s.backGroundBiggerFont;
      break;
  }

  return (
    <Link href={path} className={`${s.defaultLink} ${linkStyle}`}>
      {icon && <span className={s.iconWrapper}>{icon}</span>}
      {linkText}
    </Link>
  );
};

export default LinkButton;
