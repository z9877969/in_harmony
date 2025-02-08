'use client';

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
        {data.navigation.map((tem, index) => (
          <li className={s.navItem} key={index}>
            <Link href={`/${locale}/`} className={s.navLink}>
              {tem}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SiteNavigation;
