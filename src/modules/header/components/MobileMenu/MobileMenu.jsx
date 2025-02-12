'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { useLanguageChanger } from '@/i18n/utils/LanguageChanger';
import { Icon } from '@/shared/components';
import { uaFlag as UaIcon, googleLogo as EnIcon } from '/public/icons';
import MobileMenuBtn from '../MobileMenuBtn/MobileMenuBtn';
import { ROUTES, SOCIALROUTES } from '@/shared/constants';
import s from './MobileMenu.module.scss';

const MobileMenu = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const [visible, setVisible] = useState(false);

  const { t } = useTranslation();
  const { handleChangeLanguage } = useLanguageChanger();

  const handleLanguageSelect = (newLocale) => {
    handleChangeLanguage(newLocale);
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

  return (
    <>
      <MobileMenuBtn onClick={() => setVisible(!visible)} visible={visible} />
      <div className={clsx(s.mobileMenu, visible && s.visible)}>
        <div className={s.langBlock}>
          <UaIcon
            className={clsx(s.langIcon, locale === 'ua' && s.activeLangIcon)}
            onClick={() => handleLanguageSelect('ua')}
          />
          <EnIcon
            className={clsx(s.langIcon, locale === 'en' && s.activeLangIcon)}
            onClick={() => handleLanguageSelect('en')}
          />
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
                {t('navLinks.0')}
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
                {t('navLinks.1')}
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
                {t('navLinks.2')}
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
                {t('navLinks.3')}
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
