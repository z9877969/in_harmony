'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation.js';
import { ROUTES } from '@/shared/constants';
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
          <Link href={`/${locale}/${ROUTES.COLLECTION}`}>Поточні збори</Link>
        </li>
        <li className={s.navItem}>
          <Link href={`/${locale}/${ROUTES.REPORTING}`} className={s.navLink}>
            Звітність
          </Link>
        </li>
        <li className={s.navItem}>
          <Link href={`/${locale}/${ROUTES.ABOUT}`} className={s.navLink}>
            Про нас
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SiteNavigation;
