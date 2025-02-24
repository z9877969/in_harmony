'use client';

import { Icon } from '@/shared/components/index.js';
import Image from 'next/image.js';
import { usePathname } from 'next/navigation.js';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ImageContainer from '../ImageContainer/ImageContainer.jsx';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks.jsx';
import TeamInfo from '../TeamInfo/TeamInfo.jsx';
import s from './TeamList.module.scss';

const TeamList = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const [data, setData] = useState(null);
  const { t } = useTranslation('footer');

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(`/api/dev-team/${locale}`);

        if (!response.ok) {
          throw new Error(
            `${t('apiErrors.fetchingError')} ${response.status} ${response.statusText}`
          );
        }

        const fetchedData = await response.json();
        if (fetchedData) {
          setData(fetchedData.data);
        }
      };

      fetchData();
    } catch (error) {
      // eslint-disable-next-line
      console.error(`${t('apiErrors.exceptionError')}  ${error}`);
    }
  }, [locale, t]);

  if (!data) {
    return null;
  }

  return (
    <ul className={s.teamList}>
      {data.map((member) => {
        return (
          <li className={s.teamItem} key={member._id}>
            <ImageContainer>
              {member.image[0] ? (
                <Image
                  src={member.image[0]}
                  placeholder="blur"
                  blurDataURL={member.image[0]}
                  alt={`${member.firstName} ${member.lastName}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className={s.image}
                />
              ) : (
                <Icon iconName="icon-non-image" />
              )}
            </ImageContainer>
            <TeamInfo data={member} />
            <SocialMediaLinks
              data={member.social}
              listClassName={s.teamSocialMediaList}
              itemClassName={s.teamSocialMediaItem}
              iconClassName={s.teamSocialMediaIcon}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TeamList;
