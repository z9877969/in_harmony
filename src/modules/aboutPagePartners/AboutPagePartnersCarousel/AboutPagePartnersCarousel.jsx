'use client';

import { useRef, useState, useEffect } from 'react';
import AboutPagePartnersCard from '../AboutPagePartnersCard/AboutPagePartnersCard';
import s from './AboutPagePartnersCarousel.module.scss';
const AboutPagePartnersCarousel = ({ partners }) => {
  const containerRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [isScrolling] = useState(true);

  const duplicatedItems = [...partners.logo, ...partners.logo];

  useEffect(() => {
    if (!isScrolling || !containerRef.current) return;

    const wrapper = containerRef.current;

    const scroll = () => {
      setScrollAmount((prev) => {
        const nextAmount = prev + 0.5;
        if (nextAmount >= wrapper.scrollWidth / 2) {
          return 0;
        }
        return nextAmount;
      });
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isScrolling]);

  useEffect(() => {
    const wrapper = containerRef.current;
    if (wrapper) {
      wrapper.style.transform = `translateX(-${scrollAmount}px)`;
    }
  }, [scrollAmount]);

  return (
    <div>
      <ul className={s.list} ref={containerRef}>
        {duplicatedItems.map((partners, index) => (
          <li key={index}>
            <AboutPagePartnersCard partners={partners} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPagePartnersCarousel;
