'use client';

import { Container, Logo, Modal } from '@/shared/components';
import { useState } from 'react';
import Contacts from '../Contacts/Contacts.jsx';
import ContactUs from '../ContactUs/ContactUs.jsx';
import LegalInfo from '../LegalInfo/LegalInfo.jsx';
import ModalContent from '../ModalContent/ModalContent.jsx';
import SiteNavigation from '../SiteNavigation/SiteNavigation.jsx';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks.jsx';
import TeamList from '../TeamList/TeamList.jsx';
import data from './data/sectionContent.json';
import s from './Footer.module.scss';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const pathname = usePathname();
  // const locale = pathname.split('/')[1];
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.gridContainer}>
          <div className={s.contactSection}>
            {/* <Link href={`/${locale}/`} className={s.logo}>
              <Image
                width={75}
                height={75}
                src="/icons/logo-inHarmony.svg"
                alt="logo"
              />
            </Link> */}
            <Logo />
            <Contacts data={data.company.contacts} />
            <SocialMediaLinks
              data={data && data.company.social}
              itemClassName={s.footerSocialMediaItem}
              iconClassName={s.footerSocialMediaIcon}
            />
          </div>

          <div className={s.navigationSection}>
            <SiteNavigation data={data.siteNavigation} />
            <LegalInfo data={data.company.legalInfo} />
          </div>

          <ContactUs data={data.company.contactUs} />
        </div>
        <div className={s.teamSection}>
          <button
            onClick={toggleModal}
            className={s.linkBtn}
            type="button"
            ariaaria-label={data.team.openModalButtonAriaLabelText}
          >
            {data.team.openModalButtonText}
          </button>
          <small className={s.copyright}>© 2024 InHarmony</small>
        </div>
      </Container>
      <Modal className={'teamModal'} open={isOpen} onClose={toggleModal}>
        <ModalContent
          title={data.team.teamModalContent.title}
          text={data.team.teamModalContent.text}
        >
          <TeamList data={data.team.members} />
        </ModalContent>
      </Modal>
    </footer>
  );
};

export default Footer;
