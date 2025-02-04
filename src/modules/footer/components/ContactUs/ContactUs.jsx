import { Button, Input, InputArea } from '@/shared/components/index.js';
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
          <Button type="submit" variant="primary" fontSize="twenty">
            {data.buttonText}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
