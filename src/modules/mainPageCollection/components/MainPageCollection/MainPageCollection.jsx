'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { SwiperSlide } from 'swiper/react';
import {
  ActiveCollectionsCard,
  Button,
  Container,
  DotsSwiper,
  SectionTitle,
} from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { ActiveCollectionList } from '@/modules/mainPageCollection';
import collections from '../../data/section-content.json';
import s from './MainPageCollection.module.scss';

const MainPageCollection = () => {
  const [isTablet, setIsTablet] = useState(false);
  const [visibleItems] = useState(3);
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  const allCollections = collections.collections;

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
    <Container>
      <section className={s.collectionSection}>
        <SectionTitle title={collections.title} className={s.title} />
        <div>
          {isTablet ? (
            <DotsSwiper
              visibleItems={visibleItems}
              customSwiper={s.customSwiper}
              totalSlides={totalSlides}
              slideCount={2}
              spaceBetween={24}
            >
              {allCollections.slice(0, visibleItems).map((collection) => (
                <SwiperSlide key={collection._id}>
                  <ActiveCollectionsCard
                    collection={collection}
                    buttonDetails={collections.button_details}
                    buttonDonas={collections.button_donas}
                  />
                </SwiperSlide>
              ))}
            </DotsSwiper>
          ) : (
            <ActiveCollectionList
              visibleItems={visibleItems}
              allCollection={collections}
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
          {collections.all_collections_button}
        </Button>
      </section>
    </Container>
  );
};

export default MainPageCollection;
