import Image from 'next/image.js';

import {
  Container,
  FormWithSumButtons,
  SectionTitle,
} from '@/shared/components';

import data from '../../data/sectionContant.json';

import s from './MainPageDonat.module.scss';

const MainPageDonat = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.box}>
          <Image
            className={s.img}
            src=""
            alt="Photo"
            width={370}
            height={250}
          />
          <div className={s.boxText}>
            <SectionTitle title={data.title} className={s.title} />
            <p className={s.text}>{data.text}</p>
          </div>
          <FormWithSumButtons className={s.form} />
        </div>
      </Container>
    </section>
  );
};

export default MainPageDonat;
