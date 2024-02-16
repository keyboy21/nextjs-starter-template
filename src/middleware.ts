import {
	pathnames,
	defaultLocale,
	locales,
	localePrefix,
} from '@/configs/i18n.config';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	locales: locales,
	defaultLocale: defaultLocale,
	localeDetection: false,
	localePrefix: localePrefix,
	pathnames: pathnames,
});

export const config = {
	matcher: ['/((?!api|_next|.*\\..*).*)'],
};
