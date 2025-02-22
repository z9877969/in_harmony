import { forwardRef } from 'react';
import clsx from 'clsx';
import s from './Section.module.scss';

const Section = forwardRef(({ children, className }, ref) => {
  return (
    <section ref={ref} className={clsx(s.section, className)}>
      {children}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
