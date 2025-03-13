import Image from 'next/image';
import { Container, Section } from '@/shared/components';
import ActivitiesCard from '../ActivitiesCard/ActivitiesCard';
import LearnMoreButton from '../LearnMoreButton/LearnMoreButton';
import { getImageSrc } from '@/shared/helpers';
import s from './MainPageAbout.module.scss';

const MainPageAbout = ({ content }) => {
  const icons = [
    'icon-support',
    'icon-hand',
    'icon-animal-paw',
    'icon-house',
    'icon-trident',
  ];
  const dataImage =
    content.image && content.image.length > 0
      ? { imageUrl: getImageSrc(content.image[0]) }
      : { imageUrl: '/images/default_image.webp' };

  return (
    <Section>
      <Container>
        <div className={s.contentContainer}>
          <div className={s.about}>
            <h2>{content?.title}</h2>
            <p>{content?.description}</p>
            <p className={s.newText}>{content?.descriptionTwo}</p>
          </div>
          <div className={s.activities}>
            <h3>{content?.sub_titles}</h3>
            <ul className={s.cards}>
              {content?.cards.map((item, index) => (
                <li key={index}>
                  <ActivitiesCard
                    icon={icons[index]}
                    title={item.title}
                    description={item.description}
                  />
                </li>
              ))}
            </ul>
          </div>
          <p className={s.motivation}>{content?.motivation}</p>
          <div className={s.imageWrapper}>
            <Image
              className={s.image}
              src={dataImage.imageUrl}
              alt={content.title}
              fill
              priority
              sizes="100%"
              placeholder="blur"
              blurDataURL="/images/blur-placeholder.jpg"
            />
          </div>
          <LearnMoreButton style={s.learnMore} />
        </div>
      </Container>
    </Section>
  );
};

export default MainPageAbout;
