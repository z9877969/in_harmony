'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/shared/constants';
import s from './NavLinks.module.scss';

const NavLinks = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={pathname === `/${locale}` ? s.active : ''}>
          <Link href={`/${locale}`}>Головна</Link>
        </li>
        <li
          className={
            pathname === `/${locale}/${ROUTES.COLLECTION}` ? s.active : ''
          }
        >
          <Link href={`/${locale}/${ROUTES.COLLECTION}`}>Поточні збори</Link>
        </li>
        <li
          className={
            pathname === `/${locale}/${ROUTES.REPORTING}` ? s.active : ''
          }
        >
          <Link href={`/${locale}/${ROUTES.REPORTING}`}>Звітність</Link>
        </li>
        <li
          className={pathname === `/${locale}/${ROUTES.ABOUT}` ? s.active : ''}
        >
          <Link href={`/${locale}/${ROUTES.ABOUT}`}>Про нас</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
