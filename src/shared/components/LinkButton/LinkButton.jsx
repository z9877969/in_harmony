'use client';

import Link from 'next/link';
import { clsx } from 'clsx';

import { LINKDATA } from '@/shared/constants';

import s from './LinkButton.module.scss';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';

const LinkButton = ({
  path,
  linkText,
  translatorPath = '',
  translatorBlock = '',
  relativePath = '',
  type,
  className,
}) => {
  const { t } = useTranslation(translatorBlock);
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
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
    <Link
      href={path || `${locale}` + relativePath}
      className={clsx(s.defaultLink, linkStyle, className)}
    >
      {icon && <span className={s.iconWrapper}>{icon}</span>}
      {linkText || t(translatorPath)}
    </Link>
  );
};

export default LinkButton;
