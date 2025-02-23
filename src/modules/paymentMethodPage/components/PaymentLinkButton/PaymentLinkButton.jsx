'use client';

import { usePathname } from 'next/navigation';
import LinkButton from '@/shared/components/LinkButton/LinkButton';
import { LINKDATA, ROUTES } from '@/shared/constants';

const PaymentLinkButton = ({ paymentCard, className }) => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  return (
    <LinkButton
      path={`/${locale}/${ROUTES.PAYMENTS(1)}`}
      linkText={paymentCard}
      type={LINKDATA.TYPE_DARK_BF}
      className={className}
    />
  );
};

export default PaymentLinkButton;
