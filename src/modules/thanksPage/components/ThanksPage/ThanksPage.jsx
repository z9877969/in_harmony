import { Container, Icon } from '@/shared/components';
import SocialLinks from '../SocialLinks/SocialLinks';
import s from './ThankPage.module.scss';

const ThanksPage = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.titleContainer}>
          <Icon className={s.iconCheck} iconName="icon-check-mark" />
          <h1 className={s.title}>Дякуємо, ваша допомога отримана!</h1>
        </div>
      </Container>
      <div className={s.imageContainer}>
        <Icon iconName="icon-non-image" className={s.image} />
      </div>
      <Container>
        <div className={s.thanksBlock}>
          <p className={s.thanksBlockText}>
            &quot;Ваша підтримка — це основа нашої діяльності. Ми раді бути
            містком між вашим бажанням допомагати і тими, хто цього потребує.
            Дякуємо за довіру, за ваш вибір діяти разом із нами. Завдяки вам ми
            маємо змогу реалізовувати проєкти, які змінюють життя людей на
            краще!&quot;
          </p>
          <p className={s.thanksBlockDesc}>Дякуємо, команда InHarmony.UA ❤️</p>
        </div>
        <div className={s.socialBlock}>
          <div>
            <h2 className={s.socialTitle}>Будьте з нами!</h2>
            <p className={s.socialText}>
              Приєднуйтеся до наших соцмереж, щоб бути в курсі нових ініціатив
              та бачити результати вашої підтримки.
            </p>
            <SocialLinks />
          </div>
          <div className={s.socialImage}>
            <Icon className={s.image} iconName="icon-non-image" />
          </div>
        </div>
        <h3 className={s.thanksSubTitle}>
          Кожен внесок допомагає створювати зміни для тих, хто поруч.
        </h3>
      </Container>
    </section>
  );
};

export default ThanksPage;
