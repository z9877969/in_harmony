import { Container } from '@/shared/components';
import { Icon } from '@/shared/components';
import sectionContent from '../../data/sectionContent.json';
import s from './OpenCollectionPageHero.module.scss';
import OpenCollectionProgress from '../OpenCollectionProgress/OpenCollectionProgress';

const OpenCollectionPageHero = ({ content }) => {
  const { elementById } = content;
  return (
    <section className={s.wrapper}>
      {elementById && (
        <Container>
          <div className={s.mainContent}>
            <div className={s.image}>
              <Icon className={s.icon} iconName={sectionContent.icon} />
            </div>
            <div className={s.info}>
              <h2 className={s.title}>{elementById.title}</h2>
              <div className={s.status}>
                <span></span>
                <p>{elementById.status}</p>
              </div>
              <div className={s.description}>
                <p>{elementById.long_desc.section1}</p>
                <p>{elementById.long_desc.section2}</p>
                <p>{elementById.long_desc.section3}</p>
              </div>
            </div>
          </div>
          <OpenCollectionProgress data={elementById} />
        </Container>
      )}
    </section>
  );
};

export default OpenCollectionPageHero;
