'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation.js';
import s from './SiteNavigation.module.scss';

const SiteNavigation = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  return (
    <nav className={s.navigation} aria-label="Site Navigation">
      <ul className={s.navList}>
        <li className={s.navItem}>
          <Link href={`/${locale}/`} className={s.navLink}>
            Головна
          </Link>
        </li>
        <li className={s.navItem}>
          <Link href={`/${locale}/collection`}>Поточні збори</Link>
        </li>
        <li className={s.navItem}>
          <Link href={`/${locale}/reporting`} className={s.navLink}>
            Звітність
          </Link>
        </li>
        <li className={s.navItem}>
          <Link href={`/${locale}/about`} className={s.navLink}>
            Про нас
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SiteNavigation;
