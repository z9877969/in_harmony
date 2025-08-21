import { i18nRouter } from 'next-i18n-router';
import { NextResponse } from 'next/server';

import i18nConfig from '../i18nConfig';
import { LANGUAGES } from './shared/constants';

export function middleware(request) {
  const { cookies, nextUrl } = request;
  const currentLocale = cookies.get('NEXT_LOCALE')?.value;

  const localeRegex = new RegExp(
    `^/(${Object.values(LANGUAGES).join('|')})/(\\1)(/|$)`
  );
  if (localeRegex.test(nextUrl.pathname)) {
    nextUrl.pathname = nextUrl.pathname.replace(localeRegex, '/$1$3');
    return NextResponse.redirect(nextUrl);
  }

  if (!currentLocale) {
    const defaultLocale = LANGUAGES.UA;
    if (!nextUrl.pathname.startsWith(`/${defaultLocale}`)) {
      nextUrl.pathname = `/${defaultLocale}${nextUrl.pathname}`;
      const response = NextResponse.redirect(nextUrl);
      response.cookies.set('NEXT_LOCALE', defaultLocale);
      return response;
    }
  }

  const url = nextUrl.clone();

  if (url.pathname === '/docs') {
    url.pathname = '/docs';
    return NextResponse.rewrite(url);
  }

  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next|favicon.ico|\\.well-known|docs).*)',
  // matcher: ['/((?!api|_next|\\.well-known|docs|.*\\..*).*)'],
};
