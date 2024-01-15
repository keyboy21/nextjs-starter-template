import { Pathnames } from 'next-intl/navigation';

export const i18nConfig = {
  defaultLocale: 'ru',
  locales: ['ru', 'en'],
};

export const locales = ['ru', 'en'] as const;

export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  '/': '/',
  '/portfolio': '/portfolio',
  '/trade': '/trade',
  '/insight': '/insight',
  '/reports': '/reports',


  // If locales use different paths, you can
  // specify each external path per locale.
  // '/about': {
  //   en: '/about/[...slug]',
  //   ru: '/ueber-uns'
  // },

  // // Dynamic params are supported via square brackets
  // '/news/[articleSlug]-[articleId]': {
  //   en: '/news/[articleSlug]-[articleId]',
  //   ru: '/neuigkeiten/[articleSlug]-[articleId]'
  // },

  // // Also (optional) catch-all segments are supported
  // '/categories/[...slug]': {
  //   en: '/categories/[...slug]',
  //   ru: '/kategorien/[...slug]'
  // }
} satisfies Pathnames<typeof i18nConfig.locales>;