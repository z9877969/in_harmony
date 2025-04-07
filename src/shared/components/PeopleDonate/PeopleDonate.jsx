'use client';

import { usePathname } from 'next/navigation';
import { Icon } from '@/shared/components';
import s from './PeopleDonate.module.scss';
import { getDonorText } from '@/shared/helpers/getDonorText';

const PeopleDonate = ({ textContent }) => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  return (
    <p className={s.peopleDonate}>
      <Icon iconName="icon-people" className={s.collectionIcon} />
      <span>{textContent}</span>
      {` ${getDonorText(textContent, locale)}`}
    </p>
  );
};

export default PeopleDonate;
