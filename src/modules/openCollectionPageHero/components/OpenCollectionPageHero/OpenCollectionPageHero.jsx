import { Container } from '@/shared/components';
import { Icon } from '@/shared/components';
import OpenCollectionProgress from '../OpenCollectionProgress/OpenCollectionProgress';
import data from '../../data/sectionContent.json';
import s from './OpenCollectionPageHero.module.scss';

const OpenCollectionPageHero = () => {
  return (
    <section className={s.wrapper}>
      <Container>
        <div className={s.mainContent}>
          <div className={s.image}>
            <Icon className={s.icon} iconName={data.icon} />
          </div>
          <div className={s.info}>
            <h2 className={s.title}>{data.title}</h2>
            <div className={s.status}>
              <span></span>
              <p>{data.status}</p>
            </div>
            <div className={s.description}>
              <p>{data.description.section1}</p>
              <p>{data.description.section2}</p>
              <p>{data.description.section3}</p>
            </div>
          </div>
        </div>
        <OpenCollectionProgress data={data.progress} />
      </Container>
    </section>
  );
};

export default OpenCollectionPageHero;
