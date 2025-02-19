import { i18nRouter } from 'next-i18n-router';
import { NextResponse } from 'next/server';

import i18nConfig from '../i18nConfig';
import { LANGUAGES } from './shared/constants';

export function middleware(request) {
  const { cookies, nextUrl } = request;
  const currentLocale = cookies.get('NEXT_LOCALE')?.value;

  if (!currentLocale) {
    const defaultLocale = LANGUAGES.UA;
    nextUrl.pathname = `/${defaultLocale}${nextUrl.pathname}`;
    const response = NextResponse.redirect(nextUrl);
    response.cookies.set('NEXT_LOCALE', defaultLocale);
    return response;
  }

  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
