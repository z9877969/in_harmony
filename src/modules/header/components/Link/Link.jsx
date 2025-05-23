'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const DonateLink = ({ href, className, children }) => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  return (
    <Link
      href={href ? `/${locale}${href}` : `/${locale}`}
      className={className}
    >
      {children}
    </Link>
  );
};

export default DonateLink;
