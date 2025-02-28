'use client';

import { FormWithSumButtons } from '@/shared/components/index.js';
import InfoCardsList from '../InfoCardsList/InfoCardsList.jsx';

import useDonateTime from '../../hooks/useDonateTime.js';

import s from './FormWithInfo.module.scss';

const FormWithInfo = ({ content }) => {
  const { donateTime, setDonateTime } = useDonateTime();
  return (
    <>
      <FormWithSumButtons className={s.form} setDonateTime={setDonateTime} />
      <InfoCardsList infoCards={content?.cards} donateTime={donateTime} />
    </>
  );
};

export default FormWithInfo;
