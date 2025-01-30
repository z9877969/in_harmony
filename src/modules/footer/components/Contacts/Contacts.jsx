import s from './Contacts.module.scss';

const Contacts = () => {
  return (
    <section>
      <h2 className={s.title}>Контакти:</h2>
      <address className={s.contactsWrapper}>
        <p className={s.text}>
          <span className={s.textDecoration}>Адреса: </span>
          Україна, 24000, Вінницька обл., місто Могилів-Подільський, вул. Верхня
          Вокзальна, будинок 1
        </p>
        <p className={s.text}>
          <span className={s.textDecoration}>Email: </span>
          <a href="mailto:info@inharmony.ua">info@inharmony.ua</a>
        </p>
        <p className={s.text}>
          <span className={s.textDecoration}>Телефон: </span>
          <a href="tel:+380963390845">+38 (096) 339-08-45</a>
        </p>
      </address>
    </section>
  );
};

export default Contacts;
