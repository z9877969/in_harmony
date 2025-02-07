'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/shared/components';
import { uaFlag as LangIcon } from '/public/icons';
import MobileMenuBtn from '../MobileMenuBtn/MobileMenuBtn';
import { ROUTES, SOCIALROUTES } from '@/shared/constants';
import s from './MobileMenu.module.scss';

const MobileMenu = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const [visible, setVisible] = useState(false);
  const [activeLang, setActiveLang] = useState('uk');

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

  const handleLangChange = (lang) => {
    setActiveLang(lang);
  };

  return (
    <>
      <MobileMenuBtn onClick={() => setVisible(!visible)} visible={visible} />
      <div className={clsx(s.mobileMenu, visible && s.visible)}>
        <div className={s.langBlock}>
          <button className={s.langBtn} onClick={() => handleLangChange('uk')}>
            <LangIcon
              className={clsx(s.langIcon, activeLang !== 'uk' && s.notActive)}
            />
          </button>
          <button className={s.langBtn} onClick={() => handleLangChange('en')}>
            <LangIcon
              className={clsx(s.langIcon, activeLang !== 'en' && s.notActive)}
            />
          </button>
        </div>
        <nav className={s.nav}>
          <ul className={s.navList}>
            <li>
              <Link
                className={clsx(
                  pathname === `/${locale}` ? s.active : '',
                  s.navLink
                )}
                href={`/${locale}`}
                onClick={() => setVisible(!visible)}
              >
                Головна
              </Link>
            </li>
            <li>
              <Link
                className={clsx(
                  pathname === `/${locale}/${ROUTES.COLLECTION}`
                    ? s.active
                    : '',
                  s.navLink
                )}
                href={`/${locale}/${ROUTES.COLLECTION}`}
                onClick={() => setVisible(!visible)}
              >
                Поточні збори
              </Link>
            </li>
            <li>
              <Link
                className={clsx(
                  pathname === `/${locale}/${ROUTES.REPORTING}` ? s.active : '',
                  s.navLink
                )}
                href={`/${locale}/${ROUTES.REPORTING}`}
                onClick={() => setVisible(!visible)}
              >
                Звітність
              </Link>
            </li>
            <li>
              <Link
                className={clsx(
                  pathname === `/${locale}/${ROUTES.ABOUT}` ? s.active : '',
                  s.navLink
                )}
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
            <a
              href={SOCIALROUTES.INSTAGRAM}
              className={s.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon iconName="icon-instagram" className={s.socialsIcon} />
            </a>
          </li>
          <li>
            <a
              href={SOCIALROUTES.TELEGRAM}
              className={s.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon iconName="icon-telegram" className={s.socialsIcon} />
            </a>
          </li>
          <li>
            <a
              href={SOCIALROUTES.TIKTOK}
              className={s.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon iconName="icon-tiktok" className={s.socialsIcon} />
            </a>
          </li>
          <li>
            <a
              href={SOCIALROUTES.FACEBOOK}
              className={s.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon iconName="icon-facebook" className={s.socialsIcon} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
