import { Container } from '@/shared/components';
import OpenCollectionProgress from '../OpenCollectionProgress/OpenCollectionProgress';
import Image from 'next/image';
import OpenCollectionPageBadge from '../openCollectionPageBadge/openCollectionPageBadge';
import CollectionStatusLabel from '../CollectionStatusLabel/CollectionStatusLabel';
import { getImageSrc } from '@/shared/helpers';
import s from './OpenCollectionPageHero.module.scss';
// import StatusCollectionReport from '../StatusCollectionReport/StatusCollectionReport';

const InsideList = ({ content }) => {
  const itemsList = content.split('\n').map((el, idx) =>
    idx === 0 ? (
      el
    ) : (
      <>
        <br />
        {el}
      </>
    )
  );

  return itemsList;
};

const OpenCollectionPageHero = ({ content }) => {
  const { title, long_desc, importance, status, term, days, period } = content;

  const descrList = Object.entries(long_desc).reduce((acc, [key, value]) => {
    if (key.startsWith('section')) {
      acc.push(value);
    }
    return acc;
  }, []);

  return (
    <section className={s.wrapper}>
      {content && (
        <Container>
          <div className={s.mainContent}>
            <Image
              className={s.image}
              src={getImageSrc(content.image[0])}
              alt={title + 'image'}
              height={900}
              width={900}
              priority
              placeholder="blur"
              blurDataURL="/images/blur-placeholder.jpg"
            />
            <div className={s.info}>
              <h2 className={s.title}>{title}</h2>
              <OpenCollectionPageBadge importance={importance} />
              <CollectionStatusLabel
                status={status}
                term={term}
                days={days}
                period={period}
              />
              <div className={s.description}>
                {descrList.map((descr, idx) => (
                  <>
                    {descr.includes('\n') ? (
                      <InsideList content={descr} />
                    ) : (
                      <p key={idx}>{descr}</p>
                    )}
                  </>
                ))}
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
