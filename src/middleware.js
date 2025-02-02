import { NextResponse } from 'next/server';
import { updateLocaleMiddleware } from '@/app/middlewares';

export function middleware(request) {
  let response = NextResponse.next();

  response = updateLocaleMiddleware(request, response);

  return response;
}
