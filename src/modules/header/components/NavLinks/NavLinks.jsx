'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
        <li className={pathname === `/${locale}/collection` ? s.active : ''}>
          <Link href={`/${locale}/collection`}>Поточні збори</Link>
        </li>
        <li className={pathname === `/${locale}/reporting` ? s.active : ''}>
          <Link href={`/${locale}/reporting`}>Звітність</Link>
        </li>
        <li className={pathname === `/${locale}/about` ? s.active : ''}>
          <Link href={`/${locale}/about`}>Про нас</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
