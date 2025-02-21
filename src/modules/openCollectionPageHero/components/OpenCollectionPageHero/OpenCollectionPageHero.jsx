'use client';
import { Container } from '@/shared/components';
import s from './OpenCollectionPageHero.module.scss';
import OpenCollectionProgress from '../OpenCollectionProgress/OpenCollectionProgress';
import CollectionStatusLabel from '../CollectionStatusLabel/CollectionStatusLabel';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const OpenCollectionPageHero = ({ content }) => {
  const { title, long_desc, status } = content;
  const { t } = useTranslation('closedCollectionPage');

  return (
    <section className={s.wrapper}>
      {content && (
        <Container>
          <div className={s.mainContent}>
            <Image
              className={s.image}
              src={content.image[0]}
              alt={title + 'image'}
              height={900}
              width={900}
              priority
              placeholder="blur"
              blurDataURL="/images/blur-placeholder.jpg"
            />
            <div className={s.info}>
              <h2 className={s.title}>{title}</h2>
              {status === 'closed' ? (
                <p className={s.closedText}>{t(`projectStatus`)}</p>
              ) : null}
              <div className={s.status}>
                <CollectionStatusLabel status={status} />
              </div>
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
