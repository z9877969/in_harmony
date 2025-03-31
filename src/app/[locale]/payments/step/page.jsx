'use client';

import { useRouter } from 'next/navigation';

const RedirectingPaymentPage = ({ params }) => {
  const router = useRouter();
  const { locale } = params;
  router.push(`/${locale}/payments/step/1`);
  return null;
};

export default RedirectingPaymentPage;
