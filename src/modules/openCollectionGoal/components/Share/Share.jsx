import { SocialMediaLinks } from '@/modules/footer/index.js';
import s from './Share.module.scss';

const Share = ({ data, className = '' }) => {
  return (
    <section className={className}>
      <h3 className={s.title}>{data.title}</h3>
      <p className={s.text}>{data.text}</p>
      <SocialMediaLinks
        listClassName={s.listClassName}
        itemClassName={s.itemClassName}
        iconClassName={s.iconClassName}
        data={data.social}
      />
    </section>
  );
};

export default Share;
