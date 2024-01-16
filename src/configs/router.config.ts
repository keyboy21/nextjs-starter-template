export const Router = {
	Home: '/',
	// SpecVehicles: (id?: number) => (id ? `/specvehicles/${id}` : '/specvehicles'),
	// Factories: (id?: number) => (id ? `/factories/${id}` : '/factories'),
	Portfolio: '/portfolio',
	Trade: '/trade',
	Insight: '/insight',
	Reports: '/reports',
	login: '/auth/login',
} as const;

// export const pathnames = {
//     // If all locales use the same pathname, a
//     // single external path can be provided.
//     '/': '/',
//     '/blog': '/blog',

//     // If locales use different paths, you can
//     // specify each external path per locale.
//     '/about': {
//         en: '/about/[...slug]',
//         ru: '/ueber-uns'
//     },

//     // Dynamic params are supported via square brackets
//     '/news/[articleSlug]-[articleId]': {
//         en: '/news/[articleSlug]-[articleId]',
//         ru: '/neuigkeiten/[articleSlug]-[articleId]'
//     },

//     // Also (optional) catch-all segments are supported
//     '/categories/[...slug]': {
//         en: '/categories/[...slug]',
//         ru: '/kategorien/[...slug]'
//     }
// } satisfies Pathnames<typeof locales>;

// export const Routes = [
// 	{ name: 'Главная', path: '/' },
// 	{ name: 'Спецтехника', path: '/specvehicles' },
// 	{ name: 'Заводы', path: '/factories' },
// 	{ name: 'Проекты', path: '/projects' },
// 	{ name: 'Сервис', path: '/service' },
// 	{ name: 'Контакты', path: '/contacts' },
// ] as const;
