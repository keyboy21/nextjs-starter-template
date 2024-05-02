import { BASE_URL } from '@/configs/env.config';
import NextAuth, { type User } from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import Credentials from 'next-auth/providers/credentials';
import { object, string } from 'zod';
import { authConfig } from './configs/auth.config';

export const config = {
	...authConfig,
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

				// const resonse = await fetch(`${BASE_URL}/auth/login`, {
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

				const user: User = {
					userId: 2,
					name: 'User name getting from jwt token',
					email: 'User email getting from jwt token',
					image: 'User image getting from jwt token',
					userType: 'User type',
					accessToken: 'Backend acces token here',
				};

				if (!user) {
					throw new Error('User not found.');
				}

				return user;
			},
		}),
	],
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);

export interface LoginResponse {
	refresh: string;
	access: string;
}

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
