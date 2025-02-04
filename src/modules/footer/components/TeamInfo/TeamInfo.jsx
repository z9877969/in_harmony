import s from './TeamInfo.module.scss';

const TeamInfo = ({ data }) => {
  const fullName = `${data.firstName} ${data.lastName}`;
  return (
    <div className={s.teamWrapper}>
      <h3 className={s.teamInfoName}>{fullName}</h3>
      <p className={s.teamInfoPosition}>{data.position}</p>
    </div>
  );
};

export default TeamInfo;
