'use client';

import { redirect } from 'next/navigation';

const RedirectingActivePage = ({ params }) => {
  const { locale } = params;
  redirect(`/${locale}/collection`);
};

export default RedirectingActivePage;
