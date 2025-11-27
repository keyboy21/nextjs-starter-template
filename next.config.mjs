// @ts-check

import createNextIntlPlugin from "next-intl/plugin";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	logging: {
		fetches: {
			fullUrl: true,
			hmrRefreshes: true,
		},
	},
	poweredByHeader: false,
	typedRoutes: true,
	output: "standalone",
	transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
	// cacheComponents: true,
	images: {
		qualities: [75, 100],
	},
	experimental: {
		inlineCss: true,
		turbopackFileSystemCacheForDev: true,
	},
	headers: async () => {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Developed-By',
						value: '',
					},
				],
			},
		];
	},
};

const withNextIntl = createNextIntlPlugin({
	experimental: {
		createMessagesDeclaration: "./messages/ru.json",
	},
});

export default withNextIntl(nextConfig);
