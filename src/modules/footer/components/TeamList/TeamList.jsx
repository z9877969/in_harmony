import Image from 'next/image.js';
import ImageContainer from '../ImageContainer/ImageContainer.jsx';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks.jsx';
import TeamInfo from '../TeamInfo/TeamInfo.jsx';
import s from './TeamList.module.scss';

const TeamList = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <ul className={s.teamList}>
      {data.map((member) => {
        return (
          <li className={s.teamItem} key={member.id}>
            <ImageContainer>
              <Image
                src={member.url}
                alt={`${member.firstName} ${member.lastName}`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className={s.image}
              />
            </ImageContainer>
            <TeamInfo data={member} />
            <SocialMediaLinks
              data={member.social}
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
