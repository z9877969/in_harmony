import React from 'react';
import s from './SectionTitle.module.scss';
const SectionTitle = ({ title }) => {
  return <h2 className={s.title}>{title}</h2>;
};

export default SectionTitle;
