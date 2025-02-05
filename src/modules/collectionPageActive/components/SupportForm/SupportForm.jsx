import { Button, Input } from '@/shared/components/index.js';
import Link from 'next/link.js';
import s from './SupportForm.module.scss';

const SupportForm = ({ data, className = '' }) => {
  const sectionClasses = `${s.sectionClass} ${className}`;
  return (
    <section className={sectionClasses}>
      <h3 className={s.title}>
        Разом ми можемо більше – підтримайте наш фонд!
      </h3>

      <form className={s.form}>
        <fieldset className={s.fieldset}>
          <Input
            labelClass={s.inputRadioLabel}
            className={s.inputRadio}
            type="radio"
            name="constantPrice"
            label={'+200 UAH'}
          />
          <Input
            labelClass={s.inputRadioLabel}
            className={s.inputRadio}
            type="radio"
            name="constantPrice"
            label={'+500 UAH'}
          />
          <Input
            labelClass={s.inputRadioLabel}
            className={s.inputRadio}
            type="radio"
            name="constantPrice"
            label={'+1000 UAH'}
          />
        </fieldset>
        <Input
          className={s.input}
          type="number"
          name="manualPrice"
          placeholder="0"
          currency="UAH"
        />
        <Button type="submit">{'До сплати'}</Button>
        <Link className={s.link} href="/payment">
          {'Інші способи оплати'}
        </Link>
      </form>
    </section>
  );
};

export default SupportForm;
