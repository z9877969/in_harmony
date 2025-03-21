import { Container, Icon } from '@/shared/components';
import { inHarmonyLogo as Logo } from '/public/icons';

import LangSwitcher from '../LangSwitcher/LangSwitcher';
import Link from '../Link/Link';
import MobileMenu from '../MobileMenu/MobileMenu';
import NavLinks from '../NavLinks/NavLinks';
import SocialLinks from '../SocialLinks/SocialLinks';

import s from './Header.module.scss';
// import { useNavigationLinks } from '@/shared/hooks/useNavigationLinks.js';

const Header = ({ t }) => {
  // const { navLinks, locale } = useNavigationLinks();

  // console.log(navLinks, locale);
  return (
    <>
      <header className={s.shadow}>
        <Container>
          {/* Left side header */}
          <div className={s.header}>
            <div className={s.logoContainer}>
              <MobileMenu />
              <Link>
                <Logo className={s.iconLogo} />
              </Link>
            </div>
            {/* Navigations header */}
            <div className={s.desktopStyle}>
              <NavLinks />
              {/* Socials link header*/}
              <SocialLinks />
              {/* Right side header */}
              <div className={s.rightSide}>
                <Link
                  href={`/${t('helpButton.href')}`}
                  className={s.donateLink}
                  as="style"
                >
                  <Icon className={s.heartIcon} iconName="icon-heart" />
                  {t('helpButton.text')}
                </Link>
                <LangSwitcher />
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
