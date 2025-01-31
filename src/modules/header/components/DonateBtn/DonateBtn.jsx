'use client';
import { Icon } from '@/shared/components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import s from './DonateBtn.module.scss';

const DonateBtn = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  return (
    <button className={s.donateBtn}>
      <Icon className={s.heartIcon} iconName="icon-heart" />
      <Link href={`/${locale}/donation`}>Допомога</Link>
    </button>
  );
};

export default DonateBtn;
