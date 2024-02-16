import { Pathnames } from 'next-intl/navigation';

export const defaultLocale = 'ru' as const;
export const locales = ['ru', 'en', 'uz'] as const;
export const localePrefix = 'as-needed';
export const pathnames = {
	'/': '/',
	'/insight': '/insight',
	'/reports': '/reports',
	'/trade': '/trade',
	'/portfolio': '/portfolio',

	//=============================================
	// '/portfolio/[...slug]': {
	// 	en: 'en/portfolio/[...slug]',
	// 	ru: 'ru/portfolio/[...slug]',
	// 	uz: 'uz/portfolio/[...slug]',
	// },
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
