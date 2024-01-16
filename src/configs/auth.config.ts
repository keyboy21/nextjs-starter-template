import { BASE_URL } from '@/configs/env.config';
import { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

async function refreshToken(token: JWT): Promise<JWT> {
	const res = await fetch(`${BASE_URL}/auth/refresh`, {
		method: 'POST',
		headers: {
			authorization: `Refresh ${token}`,
		},
	});
	console.log('refreshed');

	const response = await res.json();

	return {
		...token,
		backendTokens: response,
	};
}

export const authConfig: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				if (!credentials?.email || !credentials?.password) return null;
				const { email, password } = credentials;
				const res = await fetch(`${BASE_URL}/auth/login`, {
					method: 'POST',
					body: JSON.stringify({
						email,
						password,
					}),
					headers: {
						'Content-Type': 'application/json',
					},
				});
				if (res.status === 401) {
					console.log(res.statusText);

					return null;
				}
				const user = await res.json();
				return user;
			},
		}),
	],
	pages: {
		signIn: '/auth/login',
	},
	session: {
		strategy: 'jwt',
		maxAge: 7 * 24 * 60 * 60,
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) return { ...token, ...user };

			// if (new Date().getTime() < token.backendTokens.expiresIn)
			// return token;

			return await refreshToken(token);
		},

		async session({ token, session }) {
			session.user = token.user;
			session.backendTokens = token.backendTokens;

			return session;
		},
	},
};

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
