'use client';

import { redirect } from 'next/navigation';

const RedirectingPaymentPage = ({ params }) => {
  const { locale } = params;
  redirect(`/${locale}/payments/step/1`);
};

export default RedirectingPaymentPage;
