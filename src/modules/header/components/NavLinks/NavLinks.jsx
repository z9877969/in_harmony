'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '@/shared/constants';
import s from './NavLinks.module.scss';
import clsx from 'clsx';

const NavLinks = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const { t } = useTranslation();
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li>
          <Link
            className={clsx(
              pathname === `/${locale}` ? s.active : '',
              s.navLink
            )}
            href={`/${locale}`}
          >
            {t('navLinks.0')}
          </Link>
        </li>
        <li>
          <Link
            className={clsx(
              pathname === `/${locale}/${ROUTES.COLLECTION}` ? s.active : '',
              s.navLink
            )}
            href={`/${locale}/${ROUTES.COLLECTION}`}
          >
            {t('navLinks.1')}
          </Link>
        </li>
        <li>
          <Link
            className={clsx(
              pathname === `/${locale}/${ROUTES.REPORTING}` ? s.active : '',
              s.navLink
            )}
            href={`/${locale}/${ROUTES.REPORTING}`}
          >
            {t('navLinks.2')}
          </Link>
        </li>
        <li>
          <Link
            className={clsx(
              pathname === `/${locale}/${ROUTES.ABOUT}` ? s.active : '',
              s.navLink
            )}
            href={`/${locale}/${ROUTES.ABOUT}`}
          >
            {t('navLinks.3')}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
