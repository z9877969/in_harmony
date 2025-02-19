'use client';

import { Container, Logo, Modal } from '@/shared/components';
import { usePathname } from 'next/navigation.js';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Contacts from '../Contacts/Contacts.jsx';
import ContactUs from '../ContactUs/ContactUs.jsx';
import LegalInfo from '../LegalInfo/LegalInfo.jsx';
import ModalContent from '../ModalContent/ModalContent.jsx';
import SiteNavigation from '../SiteNavigation/SiteNavigation.jsx';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks.jsx';
import TeamList from '../TeamList/TeamList.jsx';
import s from './Footer.module.scss';

const Footer = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);
  const { t } = useTranslation('footer');

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/all-pages/${locale}/footer`);

        if (!response.ok) {
          throw new Error(
            `${t('apiErrors.fetchingError')} ${response.statusText}`
          );
        }

        const footerData = await response.json();
        if (footerData?.section?.sections_list?.[1]?.section_content) {
          setData(footerData.section.sections_list[1].section_content);
        } else {
          // eslint-disable-next-line
          console.warn(`${t('apiErrors.missingDataError')}  ${footerData}`);
        }
      } catch (error) {
        // eslint-disable-next-line
        console.error(`${t('apiErrors.exceptionError')}  ${error}`);
      }
    };

    fetchData();
  }, [locale, t]);

  if (!data) {
    return null;
  }

  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.gridContainer}>
          <div className={s.contactSection}>
            <Logo />
            <div className={s.contactsSocialWrapper}>
              <Contacts data={data.company.contacts} />
              <SocialMediaLinks
                data={data && data.company.social}
                itemClassName={s.footerSocialMediaItem}
                iconClassName={s.footerSocialMediaIcon}
              />
            </div>
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
            ariaaria-label={t('openModalButton.openModalButtonAriaLabelText')}
          >
            {t('openModalButton.openModalButtonText')}
          </button>
          <small className={s.copyright}>{data.company.copyright}</small>
        </div>
      </Container>
      <Modal className={'teamModal'} open={isOpen} onClose={toggleModal}>
        <ModalContent
          title={data.team.teamModalContent.title}
          text={data.team.teamModalContent.text}
        >
          <TeamList />
        </ModalContent>
      </Modal>
    </footer>
  );
};

export default Footer;
