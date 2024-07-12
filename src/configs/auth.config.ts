import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
	session: {
		strategy: 'jwt',
		maxAge: 1 * 24 * 60 * 60,
	},
	pages: {
		signIn: '/auth/login',
	},
	callbacks: {
		jwt: async ({ token, user }) => {
			if (user) {
				token.userId = user.userId;
				token.userName = user.userName;
				token.accessToken = user.accessToken;
			}
			return token;
		},
		session: ({ session, token }) => {
			if (token) {
				session.user.userId = token.userId;
				session.user.userName = token.userName;
				session.user.accessToken = token.accessToken;
			}
			return session;
		},
	},
	providers: [],
} satisfies NextAuthConfig;
