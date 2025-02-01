'use client';

import { Container, Modal } from '@/shared/components';
import Image from 'next/image.js';
import { useState } from 'react';

import {
  Contacts,
  ContactUs,
  LegalInfo,
  ModalContent,
  SiteNavigation,
  SocialMediaLinks,
} from '../../index.js';
import s from './Footer.module.scss';

import TeamList from '../TeamList/TeamList.jsx';
import data from './data/sectionContent.json';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.gridContainer}>
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
            <SocialMediaLinks
              data={data && data.company.social}
              itemClassName={s.footerSocialMediaItem}
              iconClassName={s.footerSocialMediaIcon}
            />
          </div>

          <div className={s.navigationSection}>
            <SiteNavigation />
            <LegalInfo />
          </div>

          <ContactUs />
        </div>
        <div className={s.teamSection}>
          <button
            onClick={toggleModal}
            className={s.linkBtn}
            type="button"
            ariaaria-label="Переглянути команду дизайнерів та розробників сайту InHarmony"
          >
            Команда дизайнерів та розробників сайту InHarmony
          </button>
          <small className={s.copyright}>© 2024 InHarmony</small>
        </div>
      </Container>
      <Modal className={'teamModal'} open={isOpen} onClose={toggleModal}>
        <ModalContent title={data.teamModal.title} text={data.teamModal.text}>
          <TeamList data={data.team.members} />
        </ModalContent>
      </Modal>
    </footer>
  );
};

export default Footer;
