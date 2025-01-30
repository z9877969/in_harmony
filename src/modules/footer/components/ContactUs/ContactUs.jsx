import { Input, InputArea } from '@/shared/components/index.js';
import s from './ContactUs.module.scss';

const ContactUs = () => {
  return (
    <section className={s.contactUsSection}>
      <h2 className={s.title}>{"Зв'язатися з нами"}</h2>

      <form className={s.form}>
        <Input type="text" placeholder="Ваше ім'я" />
        <Input type="text" placeholder="Ваш email" />
        <InputArea placeholder="Ваше повідомлення" />
        <button
          type="submit"
          className={s.submitBtn}
          aria-label="Відправити форму з контактними даними"
        >
          Надіслати
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
