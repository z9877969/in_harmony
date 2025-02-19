import { Container } from '@/shared/components';
import { Icon } from '@/shared/components';
import sectionContent from '../../data/sectionContent.json';
import s from './OpenCollectionPageHero.module.scss';
import OpenCollectionProgress from '../OpenCollectionProgress/OpenCollectionProgress';
import CollectionStatusLabel from '../CollectionStatusLabel/CollectionStatusLabel';

const OpenCollectionPageHero = ({ content }) => {
  const { title, long_desc, status } = content;

  return (
    <section className={s.wrapper}>
      {content && (
        <Container>
          <div className={s.mainContent}>
            <div className={s.image}>
              <Icon className={s.icon} iconName={sectionContent.icon} />
            </div>
            <div className={s.info}>
              <h2 className={s.title}>{title}</h2>
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
