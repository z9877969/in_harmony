import { NextResponse } from 'next/server';

export function updateLocaleMiddleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    const defaultLang = 'uk';
    return NextResponse.redirect(new URL(`/${defaultLang}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/', // using for only main route
};
