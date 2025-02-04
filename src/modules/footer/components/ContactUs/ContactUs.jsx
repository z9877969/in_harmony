import { Input, InputArea } from '@/shared/components/index.js';
import s from './ContactUs.module.scss';

const ContactUs = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <section className={s.contactUsSection}>
      <div className={s.formWrapper}>
        <h2 className={s.title}>{data.title}</h2>

        <form className={s.form}>
          <Input
            className={s.inputFooter}
            type="text"
            placeholder={data.placeholderName}
          />
          <Input
            className={s.inputFooter}
            type="text"
            placeholder={data.placeholderEmail}
          />
          <InputArea
            className={s.textAreaFooter}
            placeholder={data.placeholderMessage}
          />
          <button
            type="submit"
            className={s.submitBtn}
            aria-label={data.buttonAriaLabel}
          >
            {data.buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
