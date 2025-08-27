'use client';

import { redirect } from 'next/navigation';

const RedirectingClosedPage = ({ params }) => {
  const { locale } = params;
  redirect(`/${locale}/reporting`);
};

export default RedirectingClosedPage;
