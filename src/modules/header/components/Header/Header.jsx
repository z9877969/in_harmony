import { Container } from '@/shared/components';
import s from './Header.module.scss';

import { inHarmonyLogo as Logo } from '/public/icons';

import LangSwitcher from '../LangSwitcher/LangSwitcher';
import MobileMenu from '../MobileMenu/MobileMenu';
import DonateBtn from '../DonateBtn/DonateBtn';
import NavLinks from '../NavLinks/NavLinks';
import SocialLinks from '../SocialsLink/SocialLinks';

const Header = () => {
  return (
    <header>
      <Container>
        {/* Left side header */}
        <div className={s.header}>
          <div className={s.logoContainer}>
            <MobileMenu />
            <Logo className={s.iconLogo} />
          </div>
          {/* Navigations header */}
          <div className={s.desktopStyle}>
            <NavLinks />
            {/* Socials link header*/}
            <SocialLinks />
            {/* Right side header */}
            <div className={s.rightSide}>
              <DonateBtn />
              <LangSwitcher />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
