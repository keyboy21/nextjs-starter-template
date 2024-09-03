import { defineRouting } from 'next-intl/routing';

const localePrefix = 'as-needed';
export const defaultLocale = 'ru' as const;
export const locales = ['ru', 'en', 'uz'] as const;
export const routing = defineRouting({
	locales,
	defaultLocale,
	localePrefix,
});
