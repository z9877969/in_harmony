'use client';

import { ROUTES } from '@/shared/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation.js';
import s from './SiteNavigation.module.scss';

const SiteNavigation = ({ data }) => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  if (!data) {
    return null;
  }

  return (
    <nav className={s.navigation} aria-label={data.navAriaLabel}>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <Link href={`/${locale}/`} className={s.navLink}>
            {data.linkMain}
          </Link>
        </li>
        <li className={s.navItem}>
          <Link href={`/${locale}/${ROUTES.COLLECTION}`}>
            {data.linkCollection}
          </Link>
        </li>
        <li className={s.navItem}>
          <Link href={`/${locale}/${ROUTES.REPORTING}`} className={s.navLink}>
            {data.linkReporting}
          </Link>
        </li>
        <li className={s.navItem}>
          <Link href={`/${locale}/${ROUTES.ABOUT}`} className={s.navLink}>
            {data.linkAbout}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SiteNavigation;
