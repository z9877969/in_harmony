import clsx from 'clsx';
import s from './Section.module.scss';

const Section = ({ children, className }) => {
  return <section className={clsx(s.section, className)}>{children}</section>;
};

export default Section;
