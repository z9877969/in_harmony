import Image from 'next/image.js';
import Link from 'next/link.js';
import { usePathname } from 'next/navigation.js';
import s from './Logo.module.scss';

const Logo = ({ width = 75, height = 75, className = '', ...props }) => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const imageClass = `${s.logo} ${className}`;

  return (
    <Link href={`/${locale}/`} className={imageClass}>
      <Image
        width={width}
        height={height}
        src="/icons/logo-inHarmony.svg"
        alt="logo"
        {...props}
      />
    </Link>
  );
};

export default Logo;
