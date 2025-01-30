import clsx from 'clsx';
import Link from 'next/link';

const NavLink = ({ href, children, className, current }) => {
  return (
    <li className={clsx(className, current)}>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default NavLink;
