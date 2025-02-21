'use client';

import { useNavigationLinks } from '@/shared/hooks/useNavigationLinks.js';
import Link from 'next/link';
import s from './SiteNavigation.module.scss';

const SiteNavigation = () => {
  const { navLinks, locale } = useNavigationLinks();

  if (!navLinks) return null;

  return (
    <nav className={s.navigation}>
      <ul className={s.navList}>
        {Object.values(navLinks).map(({ href, text }, index) => (
          <li className={s.navItem} key={index}>
            <Link href={`/${locale}${href}`} className={s.navLink}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SiteNavigation;
