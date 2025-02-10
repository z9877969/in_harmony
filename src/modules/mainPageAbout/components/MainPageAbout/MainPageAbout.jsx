'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '@/shared/constants';
import { Container, Section } from '@/shared/components';
import Button from '@/shared/components/Button/Button';
import ActivitiesCard from '../ActivitiesCard/ActivitiesCard';

import s from './MainPageAbout.module.scss';

const MainPageAbout = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const { t } = useTranslation('mainPage');
  const cards = t('about.activities.cards', { returnObjects: true });

  return (
    <Section>
      <Container>
        <div className={s.contentContainer}>
          <div className={s.about}>
            <h2>{t('about.title')}</h2>
            <p>{t('about.description')}</p>
          </div>
          <div className={s.activities}>
            <h3>{t('about.activities.title')}</h3>
            <ul className={s.cards}>
              {cards.map((item) => (
                <li key={item.id}>
                  <ActivitiesCard
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                </li>
              ))}
            </ul>
          </div>
          <p className={s.motivation}>{t('about.motivation')}</p>
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
