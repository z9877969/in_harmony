'use client';

import { useRouter } from 'next/navigation';

const RedirectingActivePage = ({ params }) => {
  const router = useRouter();
  const { locale } = params;
  router.push(`/${locale}/collection`);
  return null;
};

export default RedirectingActivePage;
