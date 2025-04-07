import Image from 'next/image';

import {
  Container,
  FormWithSumButtons,
  SectionTitle,
} from '@/shared/components';

import s from './MainPageDonat.module.scss';

const MainPageDonat = ({ content }) => {
  // dataProps отримуємо з пропсів або з fetch-запиту
  const dataProps = {
    imageUrl: '/images/main-page-donate-desktop2x.png',
  };

  return (
    <section className={s.section}>
      <Container>
        <div className={s.content}>
          <div className={s.imageWrapper}>
            <Image
              className={s.image}
              src={dataProps.imageUrl}
              alt={content.alt}
              fill
              priority
              sizes="100%"
              placeholder="blur"
              quality={75}
              blurDataURL="/images/blur-placeholder.jpg"
            />
          </div>
          <div className={s.boxText}>
            <SectionTitle title={content.title} className={s.title} />
            <p className={s.text}>{content.description}</p>
          </div>
          <FormWithSumButtons className={s.form} />
        </div>
      </Container>
    </section>
  );
};

export default MainPageDonat;
