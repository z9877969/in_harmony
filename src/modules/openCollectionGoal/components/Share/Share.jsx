'use client';

import { useEffect, useState } from 'react';
import { SocialMediaLinks } from '@/modules/footer/index.js';
import { getShareOptions } from '../../data/shareOptions';
import s from './Share.module.scss';

const Share = ({ data, className = '' }) => {
  const [shareList, setShareList] = useState([]);

  useEffect(() => {
    const shareOptions = getShareOptions(window);
    const shareList = data.social.reduce((acc, el) => {
      if (shareOptions[el.name]) {
        el.url = shareOptions[el.name].url;
        acc.push(el);
      }
      return acc;
    }, []);
    setShareList(shareList);
  }, [data.social]);

  return (
    <section className={className}>
      <h3 className={s.title}>{data.title}</h3>
      <p className={s.text}>{data.text}</p>
      <SocialMediaLinks
        listClassName={s.listClassName}
        itemClassName={s.itemClassName}
        iconClassName={s.iconClassName}
        data={shareList}
      />
    </section>
  );
};

export default Share;
