import { SocialMediaLinks } from '../../index.js';
import ImageContainer from '../ImageContainer/ImageContainer.jsx';
import TeamInfo from '../TeamInfo/TeamInfo.jsx';
import s from './TeamList.module.scss';

const TeamList = ({ data }) => {
  return (
    <ul className={s.teamList}>
      {data &&
        data.map((member) => {
          return (
            <li className={s.teamItem} key={member.id}>
              <ImageContainer></ImageContainer>
              <TeamInfo data={member} />
              <SocialMediaLinks
                data={member.social}
                className={'socialIconsItemTeam'}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default TeamList;
