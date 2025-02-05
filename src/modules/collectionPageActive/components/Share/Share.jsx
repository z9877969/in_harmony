import { SocialMediaLinks } from '@/modules/footer/index.js';
import s from './Share.module.scss';

const Share = ({ data, className = '' }) => {
  return (
    <section className={className}>
      <h3 className={s.title}>{'Поділитися'}</h3>
      <p className={s.text}>Розкажіть про збір друзям — це теж допомога!</p>
      <SocialMediaLinks />
    </section>
  );
};

export default Share;
