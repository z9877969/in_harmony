'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '@/shared/constants';
import { Container, Section } from '@/shared/components';
import Button from '@/shared/components/Button/Button';
import ActivitiesCard from '../ActivitiesCard/ActivitiesCard';

import s from './MainPageAbout.module.scss';

const MainPageAbout = ({ content }) => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const { t } = useTranslation('mainPage');
  const icons = ['icon-support', 'icon-hand', 'icon-animal-paw', 'icon-house'];

  return (
    <Section>
      <Container>
        <div className={s.contentContainer}>
          <div className={s.about}>
            <h2>{content?.title}</h2>
            <p>{content?.description}</p>
          </div>
          <div className={s.activities}>
            <h3>{content?.sub_titles}</h3>
            <ul className={s.cards}>
              {content?.cards.map((item, index) => (
                <li key={index}>
                  <ActivitiesCard
                    icon={icons[index]}
                    title={item.title}
                    description={item.description}
                  />
                </li>
              ))}
            </ul>
          </div>
          <p className={s.motivation}>{content?.motivation}</p>
          <div className={s.image}></div>
          <div className={s.learnMore}>
            <Link href={`/${locale}/${ROUTES.ABOUT}`}>
              <Button variant="secondary" border={true}>
                {t('about.learnMore')}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default MainPageAbout;
