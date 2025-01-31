import React from 'react';
import s from './SectionTitle.module.scss';
const SectionTitle = ({ title, className = '' }) => {
  return <h2 className={`${s.title} ${className}`}>{title}</h2>;
};

export default SectionTitle;
