'use client';

import { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import {
  ActiveCollectionsCard,
  Container,
  DotsSwiper,
  Section,
  SectionTitle,
} from '@/shared/components';
import other_collection from '../../data/section-content.json';
import s from './OpenCollectionOther.module.scss';
import { useParams } from 'next/navigation';

const OpenCollectionOther = ({ content }) => {
  const [visibleItems, setVisibleItems] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);
  const [collections, setCollections] = useState();
  //   const collections = other_collection.collections;

  const { id } = useParams();

  useEffect(() => {
    const handleResize = (collections) => {
      const width = window.innerWidth;
      let itemsPerPage = 1;
      let slidesCount = collections.length;

      if (width >= 1440) {
        itemsPerPage = 3;
        slidesCount = Math.ceil(collections.length) - 2;
      } else if (width > 767) {
        itemsPerPage = 2;
        slidesCount = Math.ceil(collections.length) - 1;
      }

      setVisibleItems(itemsPerPage);
      setTotalSlides(slidesCount > 0 ? slidesCount : 1);
    };

    const handleData = () => {
      const otherCollections = content.cards.filter((el) => el._id !== id);

      handleResize(otherCollections);
      setCollections(otherCollections);
    };
    handleData();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [content.cards, id]);

  return (
    <Section className={s.section}>
      {collections && (
        <Container>
          <SectionTitle title={collections.title} className={s.title} />
          <div>
            <DotsSwiper
              customSwiper={s.customSwiper}
              totalSlides={totalSlides}
              slideCount={visibleItems}
              spaceBetween={24}
            >
              {collections.map((collection) => (
                <SwiperSlide key={collection._id}>
                  <ActiveCollectionsCard
                    collection={collection}
                    buttonDetails={other_collection.button_details}
                    buttonDonas={other_collection.button_donas}
                  />
                </SwiperSlide>
              ))}
            </DotsSwiper>
          </div>
        </Container>
      )}
    </Section>
  );
};

export default OpenCollectionOther;
