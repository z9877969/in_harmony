import Image from 'next/image';

import { Container } from '@/shared/components';
import data from '../../data/sectionContent.json';

import s from './DiscardHelpPageHero.module.scss';

const DiscardHelpPageHero = () => {
  // dataProps отримуємо з пропсів або з fetch-запиту
  const dataProps = {
    imageUrl: '/images/peace-poster-desktop2x.png',
  };
  return (
    <section className={s.section}>
      <Container>
        <div className={s.content}>
          <div className={s.imageWrapper}>
            <Image
              className={s.image}
              src={dataProps.imageUrl}
              alt={data.alt}
              fill
              priority
              sizes="100%"
              placeholder="blur"
              blurDataURL="/images/blur-placeholder.jpg"
            />
          </div>
          <div className={s.textBlock}>
            <h1 className={s.title}>{data.title}</h1>
            <p className={s.paragraph}>{data.firstParagraph}</p>
            <p>{data.secondParagraph}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DiscardHelpPageHero;
