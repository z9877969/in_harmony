'use client';

import useEmblaCarousel from 'embla-carousel-react';
import s from './AboutPagePartnersCarousel.module.scss';
import AutoScroll from 'embla-carousel-auto-scroll';

import AboutPagePartnersCard from '../AboutPagePartnersCard/AboutPagePartnersCard';

const AboutPagePartnersCarousel = ({ cards }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 0.7, stopOnInteraction: false }),
  ]);
  const duplicatedItems = [...cards, ...cards];

  return (
    <div className={s.embla} ref={emblaRef}>
      <ul className={s.embla__container}>
        {duplicatedItems.map((cards, index) => (
          <li className={s.embla__slide} key={index}>
            <AboutPagePartnersCard cards={cards} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPagePartnersCarousel;
