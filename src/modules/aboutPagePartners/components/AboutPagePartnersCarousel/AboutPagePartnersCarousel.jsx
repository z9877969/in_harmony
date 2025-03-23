'use client';

import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import AboutPagePartnersCard from '../AboutPagePartnersCard/AboutPagePartnersCard';
import s from './AboutPagePartnersCarousel.module.scss';

const AboutPagePartnersCarousel = ({ cards }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 0.7, stopOnInteraction: false }),
  ]);

  return (
    <div className={s.embla} ref={emblaRef}>
      <ul className={s.embla__container}>
        {cards.map((card) => (
          <li className={s.embla__slide} key={card._id}>
            <AboutPagePartnersCard card={card} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPagePartnersCarousel;
