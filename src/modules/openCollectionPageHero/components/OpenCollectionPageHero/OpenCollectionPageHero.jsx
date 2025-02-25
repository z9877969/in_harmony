import { Container } from '@/shared/components';
import s from './OpenCollectionPageHero.module.scss';
import OpenCollectionProgress from '../OpenCollectionProgress/OpenCollectionProgress';
import Image from 'next/image';
import OpenCollectionPageBadge from '../openCollectionPageBadge/openCollectionPageBadge';
// import StatusCollectionReport from '../StatusCollectionReport/StatusCollectionReport';

const OpenCollectionPageHero = ({ content }) => {
  const { title, long_desc, importance, status, term, days, period } = content;

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
              <OpenCollectionPageBadge importance={importance} />
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
