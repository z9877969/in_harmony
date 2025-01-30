'use client';
import { Container } from '@/shared/components';
import s from './Header.module.scss';
import Link from 'next/link';

import { inHarmonyLogo as Logo } from '/public/icons';
import { uaFlag as LangIcon } from '/public/icons';

import { Icon } from '@/shared/components';
import NavLink from '../NavLink/NavLink';
import SocialLink from '../SocialLink/SocialLink';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  return (
    <header>
      <Container>
        {/* Left side header */}
        <div className={s.header}>
          <div className={s.logo}>
            <button className={s.mobileMenuBtn}>
              <Icon className={s.mobileMenuIcon} iconName="icon-menu-burger" />
            </button>
            <Logo className={s.iconLogo} />
          </div>
          {/* Nav header */}
          <div className={s.desktopStyle}>
            <nav className={s.nav}>
              <ul className={s.navList}>
                <NavLink
                  href={`/${locale}`}
                  current={pathname === `/${locale}` ? s.active : ''}
                >
                  Головна
                </NavLink>
                <NavLink
                  href={`/${locale}/donations`}
                  current={pathname === `/${locale}/donations` ? s.active : ''}
                >
                  Поточні збори
                </NavLink>
                <NavLink
                  href={`/${locale}/reports`}
                  current={pathname === `/${locale}/donations` ? s.active : ''}
                >
                  Звітність
                </NavLink>
                <NavLink
                  href={`/${locale}/about`}
                  current={pathname === `/${locale}/donations` ? s.active : ''}
                >
                  Про нас
                </NavLink>
              </ul>
            </nav>
            {/* Socials header*/}
            <ul className={s.socials}>
              <SocialLink
                href="https://www.instagram.com"
                iconName="icon-instagram"
                className={s.socialLink}
                iconClassName={s.socialsIcon}
              />
              <SocialLink
                href="/"
                iconName="icon-telegram"
                className={s.socialLink}
                iconClassName={s.socialsIcon}
              />
              <SocialLink
                href="https://www.tiktok.com/"
                iconName="icon-tiktok"
                className={s.socialLink}
                iconClassName={s.socialsIcon}
              />
              <SocialLink
                href="https://www.facebook.com"
                iconName="icon-facebook"
                className={s.socialLink}
                iconClassName={s.socialsIcon}
              />
            </ul>
            {/* Right side header */}
            <div className={s.rightSide}>
              <button className={s.donateBtn}>
                <Icon className={s.heartIcon} iconName="icon-heart" />
                <Link href={`${locale}/donations`}>Допомога</Link>
              </button>
              <div className={s.langBlock}>
                <LangIcon className={s.langIcon} />
                <button className={s.langBtn}>
                  <Icon
                    className={s.langBtnIcon}
                    iconName="icon-chevron-down"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
