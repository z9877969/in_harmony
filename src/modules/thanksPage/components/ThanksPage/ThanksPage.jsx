'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Icon } from '@/shared/components';
import SocialLinks from '../SocialLinks/SocialLinks';
import s from './ThankPage.module.scss';
import Image from 'next/image';

const ThanksPage = ({
  content: {
    title,
    thanksMessage,
    teamMessage,
    socialTitle,
    socialText,
    subTitle,
    image,
  },
}) => {
  const query = useSearchParams();
  const [hasSent, setHasSent] = useState(false);

  useEffect(() => {
    if (hasSent || !query.toString()) return;

    const postQuery = async () => {
      try {
        const response = await fetch(`/api/user-payment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(Object.fromEntries(query.entries())),
        });

        if (!response.ok) {
          throw new Error('Request error');
        }

        setHasSent(true);
      } catch (error) {
        // eslint-disable-next-line
        console.error('request error:', error);
      }
    };

    postQuery();
  }, [query, hasSent]);

  return (
    <section className={s.section}>
      <Container>
        <div className={s.titleContainer}>
          <Icon className={s.iconCheck} iconName="icon-check-mark" />
          <h1 className={s.title}>{title}</h1>
        </div>
      </Container>
      <div className={s.imageContainer}>
        <Image
          className={s.image}
          width={1540}
          height={568}
          src={image[0]}
          alt="thanks image"
        />
      </div>
      <Container>
        <div className={s.thanksBlock}>
          <p className={s.thanksBlockText}>{thanksMessage}</p>
          <div className={s.thanksDiv}>
            <p className={s.thanksBlockDesc}>{teamMessage}</p>
            <div className={s.iconThanks}></div>
          </div>
        </div>
        <div className={s.socialBlock}>
          <div>
            <h2 className={s.socialTitle}>{socialTitle}</h2>
            <p className={s.socialText}>{socialText}</p>
            <SocialLinks />
          </div>
          <div className={s.socialImageContainer}>
            <Image
              className={s.socialImage}
              width={900}
              height={900}
              src={image[1]}
              alt="thanks image"
            />
          </div>
        </div>
        <h3 className={s.thanksSubTitle}>{subTitle}</h3>
      </Container>
    </section>
  );
};

export default ThanksPage;
