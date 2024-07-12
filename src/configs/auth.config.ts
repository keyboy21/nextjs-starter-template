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
				token.accessToken = user.accessToken;
				token.userName = user.userName;
				// token.userType = user.userType;
			}
			return token;
		},
		// session: ({ session, token }) => {
		// 	if (token) {
		// 		session.user.userId = token.userId;
		// 		session.user.accessToken = token.accessToken;
		// 		// session.user.userType = token.userType;
		// 	}
		// 	return session;
		// },
	},
	providers: [],
} satisfies NextAuthConfig;
