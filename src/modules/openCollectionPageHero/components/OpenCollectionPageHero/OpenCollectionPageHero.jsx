'use client';
import { Container } from '@/shared/components';
import s from './OpenCollectionPageHero.module.scss';
import OpenCollectionProgress from '../OpenCollectionProgress/OpenCollectionProgress';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const OpenCollectionPageHero = ({ content }) => {
  const { title, long_desc, importance, image } = content;
  const { t } = useTranslation('activeCollectionCard');
  return (
    <section className={s.wrapper}>
      {content && (
        <Container>
          <div className={s.mainContent}>
            <div className={s.imageWrapper}>
              {/* <div className={s.image}> */}
              <Image
                className={s.image}
                src={image[0]}
                alt={title + 'image'}
                fill
                priority
                sizes="100%"
                placeholder="blur"
                blurDataURL="/images/blur-placeholder.jpg"
              />
              {/* </div> */}
            </div>
            <div className={s.info}>
              <h2 className={s.title}>{title}</h2>
              <p
                className={importance === 'urgent' ? s.importance : s.nonUrgent}
              >
                {t(`importanceType.${importance}`)}
              </p>
              <div className={s.description}>
                <p>{long_desc.section1}</p>
                <p>{long_desc.section2}</p>
                <p>{long_desc.section3}</p>
              </div>
            </div>
          </div>
          <OpenCollectionProgress data={content} />
        </Container>
      )}
    </section>
  );
};

export default OpenCollectionPageHero;
