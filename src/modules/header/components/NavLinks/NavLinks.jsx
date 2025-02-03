'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/shared/constants';
import s from './NavLinks.module.scss';
import clsx from 'clsx';

const NavLinks = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
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
            Головна
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
            Поточні збори
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
            Звітність
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
            Про нас
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
