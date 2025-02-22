'use client';

import { useNavigationLinks } from '@/shared/hooks/useNavigationLinks.js';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation.js';
import s from './NavLinks.module.scss';

const NavLinks = () => {
  const pathname = usePathname();
<<<<<<< HEAD
  const locale = pathname.split('/')[1];
  const { t } = useTranslation();
=======
  const { navLinks, locale } = useNavigationLinks();

  if (!navLinks) {
    return null;
  }
>>>>>>> main

  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        {Object.values(navLinks).map(({ href, text }, index) => (
          <li key={index}>
            <Link
              href={`/${locale}${href}`}
              className={clsx(
                pathname.replace(/\/$/, '') === `/${locale}${href}` ||
                  (href === '/' && pathname === `/${locale}`)
                  ? s.active
                  : '',
                s.navLink
              )}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
