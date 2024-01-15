import { i18nConfig } from '@/configs/i18n.config';

import createMiddleware from 'next-intl/middleware';
export default createMiddleware({
  locales: i18nConfig.locales,
  defaultLocale: i18nConfig.defaultLocale,
  localeDetection: false,
  localePrefix:'as-needed',
  // pathnames:pathnames
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};