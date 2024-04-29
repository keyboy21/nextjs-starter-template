import { BASE_URL } from '@/configs/env.config';
import NextAuth, { type NextAuthConfig } from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import Credentials from 'next-auth/providers/credentials';
import { object, string } from 'zod';

export const signInSchema = object({
	email: string({ required_error: 'Email is required' })
		.min(1, 'Email is required')
		.email('Invalid email'),
	password: string({ required_error: 'Password is required' })
		.min(1, 'Password is required')
		.min(8, 'Password must be more than 8 characters')
		.max(32, 'Password must be less than 32 characters'),
});

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
				const { email, password } = await signInSchema.parseAsync(credentials);

				console.log('email', email);
				console.log('password', password);

				// const res = await fetch(`${BASE_URL}/auth/login`, {
				// 	method: 'POST',
				// 	body: JSON.stringify({
				// 		email,
				// 		password,
				// 	}),
				// 	headers: {
				// 		'Content-Type': 'application/json',
				// 	},
				// });
				// if (res.status === 401) {
				// 	console.log(res.statusText);
				// 	return null;
				// }
				// const data = await res.json();

				// return data;

				return {
					email: email,
					id: 12312,
					name: 'UserName',
					image: '/image',
				};
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
		// TODO: Better jwt, session
		async jwt({ token, user }) {
			// if (user) {
			// 	token.backendTokens = user.id
			// }
			return token;
		},

		// async session({ token, session }) {
		// 	session.backendTokens = token.backendTokens;
		// 	return session;
		// },
	},
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
