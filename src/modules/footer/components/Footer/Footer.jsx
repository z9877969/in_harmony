import { Container } from '@/shared/components';
import Image from 'next/image.js';
import Contacts from '../Contacts/Contacts.jsx';
import ContactUs from '../ContactUs/ContactUs.jsx';
import LegalInfo from '../LegalInfo/LegalInfo.jsx';
import SiteNavigation from '../SiteNavigation/SiteNavigation.jsx';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks.jsx';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footerContentWrapper}>
          <div className={s.contactSection}>
            <div className={s.logo}>
              <Image
                width={75}
                height={75}
                src="/icons/logo-inHarmony.svg"
                alt="logo"
              />
            </div>
            <Contacts />
            <SocialMediaLinks />
          </div>

          <div className={s.navigationSection}>
            <SiteNavigation />
            <LegalInfo />
          </div>

          <ContactUs />

          <div className={s.teamSection}>
            <button
              className={s.linkBtn}
              type="button"
              ariaaria-label="Переглянути команду дизайнерів та розробників сайту InHarmony"
            >
              Команда дизайнерів та розробників сайту InHarmony
            </button>
            <small className={s.copyright}>© 2024 InHarmony</small>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
