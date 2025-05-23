import s from './TermsAndConditionsList.module.scss';

const TermsAndConditionList = ({ termsData }) => {
  return (
    <ul className={s.list}>
      {termsData.map(({ title, description }, index) => (
        <li key={index} className={s.item}>
          <h2 className={s.subTitle}>{title}</h2>
          <p className={s.text}>{description}</p>
        </li>
      ))}
    </ul>
  );
};

export default TermsAndConditionList;
