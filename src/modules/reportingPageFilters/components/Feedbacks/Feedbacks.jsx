import { Icon } from '@/shared/components/index.js';
import s from './Feedbacks.module.scss';
import Link from 'next/link.js';

const Feedbacks = ({ children, href }) => {
  return (
    <>
      <Link href={href} className={s.linkFeedbacks} target="_blank">
        <p>{children}</p>
        <Icon
          iconName="icon-arrow-right-circle"
          width="24"
          height="24"
          className={s.iconFeedbacks}
        />
      </Link>
    </>
  );
};

export default Feedbacks;
