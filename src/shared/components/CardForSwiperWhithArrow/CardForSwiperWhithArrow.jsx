import s from './CardForSwiperWhithArrow.module.scss';

const CardForSwiperWhithArrow = ({ slid }) => {
  const { title, text, item, total, currency, term, days, period } = slid;
  return (
    <div className={s.list}>
      <div className={s.slide}>
        <div className={s.content}>
          <div className={s.wrapper}>
            <h3 className={s.title}>{title}</h3>
            <p className={s.text}>{text}</p>
            <p className={s.text}>
              <span className={s.preTitle}>{item}</span>
              &#8197;
              <span>{total}</span>
              <span>{currency}</span>
            </p>
            <p className={s.text}>
              <span className={s.preTitle}>{term}</span>
              &#8197;
              {days}
              {period}
            </p>
          </div>
        </div>
        <div className={s.imgBlock}></div>
      </div>
    </div>
  );
};

export default CardForSwiperWhithArrow;
