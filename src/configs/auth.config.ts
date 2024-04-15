import { BASE_URL } from '@/configs/env.config';
import NextAuth, { type NextAuthConfig } from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import Credentials from 'next-auth/providers/credentials';

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

export const config = {
	providers: [
		Credentials({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
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
				const data = await res.json();

				return data;
			},
		}),
	],
	pages: {
		signIn: '/auth/login',
	},
	session: {
		strategy: 'jwt',
		maxAge: 86400,
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) return { ...token, ...user };
			if (new Date().getTime() < token.backendTokens.expiresIn) return token;
			return token;
		},

		async session({ token, session }) {
			session.backendTokens = token.backendTokens;
			session.user = {
				id: `${token.user.userid}`,
				userid: token.user.userid,
				email: token.user.email,
				name: token.user.name,
				emailVerified: new Date()
			}
			return session;
		},
	},
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
