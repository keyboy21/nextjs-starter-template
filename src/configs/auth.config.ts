import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
	session: {
		strategy: 'jwt',
		maxAge: 86400,
	},
	pages: {
		signIn: '/auth/login',
	},
	callbacks: {
		jwt: async ({ token, user }) => {
			if (user) {
				token.userId = user.userId;
				token.userType = user.userType;
				token.accessToken = user.accessToken;
			}
			return token;
		},
		session: ({ session, token }) => {
			if (token) {
				session.user.userId = token.userId;
				session.user.userType = token.userType;
				session.user.accessToken = token.accessToken;
			}
			return session;
		},
	},
	providers: [],
} satisfies NextAuthConfig;
