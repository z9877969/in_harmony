'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import {
  ActiveCollectionsCard,
  Button,
  Container,
  DotsSwiper,
} from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { ActiveCollectionList } from '@/modules/mainPageCollection';

import s from './MainPageCollection.module.scss';

const MainPageCollection = ({ content }) => {
  const { t } = useTranslation('mainPage');
  const [isTablet, setIsTablet] = useState(false);
  const [visibleItems] = useState(3);
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const cards = content.cards;
  const buttons = t('active_collections.buttons', { returnObjects: true });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width < 1440);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const totalSlides = 2;

  return (
    <section className={s.collectionSection}>
      <Container>
        <div className={s.mainContainer}>
          <h2 className={s.title}>{content.title}</h2>
          <div>
            {isTablet ? (
              <DotsSwiper
                visibleItems={visibleItems}
                customSwiper={s.customSwiper}
                totalSlides={totalSlides}
                slideCount={2}
                spaceBetween={24}
              >
                {cards.slice(0, visibleItems).map((collection) => (
                  <SwiperSlide key={collection._id}>
                    <ActiveCollectionsCard
                      collection={collection}
                      buttonDetails={buttons.details}
                      buttonDonats={buttons.donats}
                    />
                  </SwiperSlide>
                ))}
              </DotsSwiper>
            ) : (
              <ActiveCollectionList
                visibleItems={visibleItems}
                allCollection={cards}
                buttonDetails={buttons.details}
                buttonDonats={buttons.donats}
              />
            )}
          </div>
          <Button
            onClick={() => router.push(`/${locale}/${ROUTES.COLLECTION}`)}
            border="true"
            className={s.desktopButton}
            size="large"
            fontSize="eighteen"
          >
            {buttons.allCollections}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default MainPageCollection;
