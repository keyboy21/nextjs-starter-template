import { routing } from '@/configs/i18n.config';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware(routing, {
	localeDetection: false,
});

export const config = {
	matcher: [
		'/',
		'/(ru|en|uz)/:path*',
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
};
