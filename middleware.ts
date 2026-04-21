import createMiddleware from 'next-intl/middleware';
import {routing} from './routing';
import {NextRequest} from 'next/server';

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // If the user doesn't have a NEXT_LOCALE cookie, force next-intl to use the defaultLocale
  // by removing the Accept-Language header from the request so it can't detect it.
  if (!request.cookies.has('NEXT_LOCALE')) {
    request.headers.delete('accept-language');
  }

  return handleI18nRouting(request);
}
 
export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(ko|en|ja)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
