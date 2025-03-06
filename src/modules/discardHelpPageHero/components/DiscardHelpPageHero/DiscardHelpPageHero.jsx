import Image from 'next/image';
import { Container } from '@/shared/components';
import s from './DiscardHelpPageHero.module.scss';

const DiscardHelpPageHero = ({ content }) => {
  const data = content.discard_content.section_content;

  return (
    <section className={s.section}>
      <Container>
        <div className={s.content}>
          <div className={s.imageWrapper}>
            <Image
              className={s.image}
              src={data.image[0]}
              alt={'pease image'}
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
