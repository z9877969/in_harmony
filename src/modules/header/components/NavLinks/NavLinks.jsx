'use client';
import { usePathname } from 'next/navigation';
import s from './NavLinks.module.scss';

import Link from 'next/link';

const NavLinks = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={pathname === `/${locale}` ? s.active : ''}>
          <Link href={`/${locale}`}>Головна</Link>
        </li>
        <li className={pathname === `/${locale}/donations` ? s.active : ''}>
          <Link href={`/${locale}/donations`}>Поточні збори</Link>
        </li>
        <li className={pathname === `/${locale}/reports` ? s.active : ''}>
          <Link href={`/${locale}/reports`}>Звітність</Link>
        </li>
        <li className={pathname === `/${locale}/about` ? s.active : ''}>
          <Link href={`/${locale}/about`}>Про нас</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
