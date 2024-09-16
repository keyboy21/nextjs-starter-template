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
				token.userId = user.id;
				token.userName = user.userName;
				token.token = user.token;
				token.firstName = user.firstName;
				token.lastName = user.lastName;
				token.email = user.email ?? '';
				token.gender = user.gender;
				token.image = user.image ?? '';
				token.refreshToken = user.refreshToken;
			}
			return token;
		},
		session: ({ session, token }) => {
			if (token) {
				session.user.id = token.id;
				session.user.userName = token.userName;
				session.user.refreshToken = token.refreshToken;
				session.user.token = token.token;
				session.user.firstName = token.firstName;
				session.user.lastName = token.lastName;
				session.user.email = token.email;
				session.user.gender = token.gender;
				session.user.image = token.image;
			}
			return session;
		},
		authorized({ auth }) {
			return !!auth;
		}
	},
	providers: [],
} satisfies NextAuthConfig;
