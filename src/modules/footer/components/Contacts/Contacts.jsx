import s from './Contacts.module.scss';

const Contacts = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <section>
      <h2 className={s.title}>{data.title}</h2>
      <address className={s.contactsWrapper}>
        <p className={s.text}>
          <span className={s.textDecoration}>{data.addressTitle}</span>
          {data.address}
        </p>
        <p className={s.text}>
          <span className={s.textDecoration}>{data.emailTitle}</span>
          <a href="mailto:info@inharmony.ua">{data.email}</a>
        </p>
        <p className={s.text}>
          <span className={s.textDecoration}>{data.phoneTitle}</span>
          <a href="tel:+380963390845">{data.phone}</a>
        </p>
      </address>
    </section>
  );
};

export default Contacts;
