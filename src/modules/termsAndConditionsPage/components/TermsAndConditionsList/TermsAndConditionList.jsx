import s from './TermsAndConditionList.module.scss';

const TermsAndConditionList = ({ termsData }) => {
  return (
    <ul className={s.list}>
      {termsData.map(({ id, title, description }) => (
        <li key={id} className={s.item}>
          <h2 className={s.subTitle}>{title}</h2>
          <p className={s.text}>{description}</p>
        </li>
      ))}
    </ul>
  );
};

export default TermsAndConditionList;
