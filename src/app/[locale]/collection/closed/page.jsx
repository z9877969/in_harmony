'use client';

import { useRouter } from 'next/navigation';

const RedirectingClosedPage = ({ params }) => {
  const router = useRouter();
  const { locale } = params;
  router.push(`/${locale}/reporting`);
  return null;
};

export default RedirectingClosedPage;
