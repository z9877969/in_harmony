'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useLanguageChanger } from '@/i18n/utils/LanguageChanger';
import { Icon } from '@/shared/components';
import { LANGUAGES, SOCIALROUTES } from '@/shared/constants';
import { useNavigationLinks } from '@/shared/hooks/useNavigationLinks.js';
import MobileMenuBtn from '../MobileMenuBtn/MobileMenuBtn';
import s from './MobileMenu.module.scss';
import { googleLogo as EnIcon, uaFlag as UaIcon } from '/public/icons';

const MobileMenu = () => {
  const pathname = usePathname();
  const { navLinks, locale } = useNavigationLinks();
  const [visible, setVisible] = useState(false);

  const { handleChangeLanguage } = useLanguageChanger();

  const handleLanguageSelect = (newLocale) => {
    handleChangeLanguage(newLocale);
  };

  const handleToggleVisible = () => {
    setVisible((prev) => !prev);
  };

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

  if (!navLinks) {
    return null;
  }

  return (
    <>
      <MobileMenuBtn onClick={handleToggleVisible} visible={visible} />
      <div className={clsx(s.mobileMenu, visible && s.visible)}>
        <div className={s.langBlock}>
          <UaIcon
            className={clsx(
              s.langIcon,
              locale === LANGUAGES.UA && s.activeLangIcon
            )}
            onClick={() => handleLanguageSelect(LANGUAGES.UA)}
          />
          <EnIcon
            className={clsx(
              s.langIcon,
              locale === LANGUAGES.EN && s.activeLangIcon
            )}
            onClick={() => handleLanguageSelect(LANGUAGES.EN)}
          />
        </div>
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
                  onClick={handleToggleVisible}
                >
                  {text}
                </Link>
              </li>
            ))}
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
