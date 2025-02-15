import { Container } from '@/shared/components';
import { Icon } from '@/shared/components';
import OpenCollectionProgress from '../OpenCollectionProgress/OpenCollectionProgress';

import s from './OpenCollectionPageHero.module.scss';
import Image from 'next/image';

const OpenCollectionPageHero = ({ closed, data }) => {
  return (
    <section className={s.wrapper}>
      <Container>
        <div className={s.mainContent}>
          <Image
            width={500}
            height={500}
            alt={data.alt}
            src={data.image && data.image[0]}
            className={s.image}
          />

          <div className={s.info}>
            <h2 className={s.title}>{data.title}</h2>
            {closed && <p className={s.closed}>Реалізований проект</p>}
            <div className={s.status}>
              <span></span>
              <p>
                {data.status === 'closed' ? 'Збір завершено' : 'Збір відкрито'}
              </p>
            </div>
            <div className={s.description}>
              <p>{data.long_desc.section1}</p>
              <p>{data.long_desc.section2}</p>
              <p>{data.long_desc.section3}</p>
            </div>
          </div>
        </div>
        <OpenCollectionProgress data={data} />
      </Container>
    </section>
  );
};

export default OpenCollectionPageHero;
