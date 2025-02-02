'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/shared/components';

import MobileMenuBtn from '../MobileMenuBtn/MobileMenuBtn';

import { ROUTES } from '@/shared/constants';
import s from './MobileMenu.module.scss';

const MobileMenu = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1439) {
        setVisible(false);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleResize);
    };
  }, [visible]);

  return (
    <>
      <MobileMenuBtn onClick={() => setVisible(!visible)} visible={visible} />
      <div className={clsx(s.mobileMenu, visible && s.visible)}>
        <nav className={s.nav}>
          <ul className={s.navList}>
            <li className={pathname === `/${locale}` ? s.active : ''}>
              <Link href={`/${locale}`} onClick={() => setVisible(!visible)}>
                Головна
              </Link>
            </li>
            <li
              className={
                pathname === `/${locale}/${ROUTES.COLLECTION}` ? s.active : ''
              }
            >
              <Link
                href={`/${locale}/${ROUTES.COLLECTION}`}
                onClick={() => setVisible(!visible)}
              >
                Поточні збори
              </Link>
            </li>
            <li
              className={
                pathname === `/${locale}/${ROUTES.REPORTING}` ? s.active : ''
              }
            >
              <Link
                href={`/${locale}/${ROUTES.REPORTING}`}
                onClick={() => setVisible(!visible)}
              >
                Звітність
              </Link>
            </li>
            <li
              className={
                pathname === `/${locale}/${ROUTES.ABOUT}` ? s.active : ''
              }
            >
              <Link
                href={`/${locale}/${ROUTES.ABOUT}`}
                onClick={() => setVisible(!visible)}
              >
                Про нас
              </Link>
            </li>
          </ul>
        </nav>
        <ul className={s.socials}>
          <li>
            <a href="https://www.instagram.com" className={s.socialLink}>
              <Icon iconName="icon-instagram" className={s.socialsIcon} />
            </a>
          </li>
          <li>
            <a href="/" className={s.socialLink}>
              <Icon iconName="icon-telegram" className={s.socialsIcon} />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/" className={s.socialLink}>
              <Icon iconName="icon-tiktok" className={s.socialsIcon} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" className={s.socialLink}>
              <Icon iconName="icon-facebook" className={s.socialsIcon} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
