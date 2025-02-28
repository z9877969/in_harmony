'use client';

import { Icon } from '@/shared/components/index.js';
import Image from 'next/image.js';
import { useTranslation } from 'react-i18next';
import ImageContainer from '../ImageContainer/ImageContainer.jsx';
import TeamInfo from '../TeamInfo/TeamInfo.jsx';
import s from './TeamList.module.scss';
import { useMemo } from 'react';
import SocialMediaItem from '../SocialMediaItem/SocialMediaItem.jsx';

const TeamList = () => {
  const { t } = useTranslation('devTeam');
  const team = useMemo(() => t('team', { returnObjects: true }) || [], [t]);

  return (
    <ul className={s.teamList}>
      {team.map((member, index) => (
        <li className={s.teamItem} key={index}>
          <ImageContainer>
            {member.image ? (
              <Image
                src={member.image}
                placeholder="blur"
                blurDataURL={member.image}
                alt={`${member.firstName} ${member.lastName}`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className={s.image}
              />
            ) : (
              <Icon iconName="icon-non-image" />
            )}
            <SocialMediaItem socialItem={member.social}>
              <Icon
                iconName="icon-linkedin"
                width="16"
                height="16"
                className={s.iconClassName}
              />
            </SocialMediaItem>
          </ImageContainer>
          <TeamInfo data={member} />
        </li>
      ))}
    </ul>
  );
};

export default TeamList;
