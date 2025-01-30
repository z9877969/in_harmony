import { Input, InputArea } from '@/shared/components/index.js';
import s from './ContactUs.module.scss';

const ContactUs = () => {
  return (
    <section className={s.contactUsSection}>
      <div className={s.formWrapper}>
        <h2 className={s.title}>{"Зв'язатися з нами"}</h2>

        <form className={s.form}>
          <Input className="inputFooter" type="text" placeholder="Ваше ім'я" />
          <Input className="inputFooter" type="text" placeholder="Ваш email" />
          <InputArea className="textAreaFooter" placeholder="Ваше повідомлення" />
          <button
            type="submit"
            className={s.submitBtn}
            aria-label="Відправити форму з контактними даними"
          >
            Надіслати
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
