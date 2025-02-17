'use client';
import { Container } from '@/shared/components';
import { Icon } from '@/shared/components';
import OpenCollectionProgress from '../OpenCollectionProgress/OpenCollectionProgress';
import sectionContent from '../../data/sectionContent.json';
import s from './OpenCollectionPageHero.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const OpenCollectionPageHero = ({ content }) => {
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    const getData = () => {
      const information = content.cards.find((el) => el._id === id);
      setData(information);
    };
    getData();
  }, [content, id]);
  return (
    <section className={s.wrapper}>
      {data && (
        <Container>
          <div className={s.mainContent}>
            <div className={s.image}>
              <Icon className={s.icon} iconName={sectionContent.icon} />
            </div>
            <div className={s.info}>
              <h2 className={s.title}>{data.title}</h2>
              <div className={s.status}>
                <span></span>
                <p>{data.status}</p>
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
      )}
    </section>
  );
};

export default OpenCollectionPageHero;
