import Image from 'next/image';
import { Container } from '@/shared/components';
import LinkButtonReportingPageDonate from '../LinkButtonReportingPageDonate/LinkButtonReportingPageDonate.jsx';
import { getImageSrc } from '@/shared/helpers/getImageSrc.js';
import s from './ReportingPageDonate.module.scss';

const ReportingPageDonate = ({ content }) => {
  // dataProps отримуємо з пропсів або з fetch-запиту
  const dataProps =
    content.image && content.image.length > 0
      ? {
          imageUrl: getImageSrc(content.image[0]),
        }
      : {
          imageUrl: '/images/default-image.jpg',
        };

  return (
    <section className={s.section}>
      <Container>
        <div className={s.content}>
          <div className={s.imageWrapper}>
            <Image
              className={s.image}
              src={dataProps.imageUrl}
              alt={content.title}
              fill
              priority
              sizes="100%"
              placeholder="blur"
              blurDataURL="/images/blur-placeholder.jpg"
            />
          </div>
          <div className={s.textContainer}>
            <h3 className={s.title}>{content.title}</h3>
            <LinkButtonReportingPageDonate />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReportingPageDonate;
