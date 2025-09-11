'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const DonateLink = ({
  href,
  className,
  children,
  outsideHref,
  target = '_parent',
}) => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  return (
    <Link
      href={
        outsideHref ? outsideHref : href ? `/${locale}${href}` : `/${locale}`
      }
      className={className}
      target={target}
    >
      {children}
    </Link>
  );
};

export default DonateLink;
