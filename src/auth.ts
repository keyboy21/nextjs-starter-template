import { BASE_URL } from '@/configs/env.config';
import NextAuth, { type User } from 'next-auth';
import { decode } from 'next-auth/jwt';
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
				userName: {
					label: 'User Name',
					type: 'username',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				const { userName, password } = await signInSchema.parseAsync(credentials);

				const res = await fetch(`${BASE_URL}/auth/login`, {
					method: 'POST',
					body: JSON.stringify({
						userName,
						password,
					}),
					headers: {
						'Content-Type': 'application/json',
					},
				});

				if (!res.ok) {
					console.log(res.statusText);
					throw new Error('Login failed');
				}

				const data = await res.json() as LoginResponse;

				console.log('login response', data);

				const { accessToken, refreshToken } = data;

				const decodedToken = await decode({
					token: accessToken,
					secret: 'secret',
					salt: 'salt',
				});

				console.log('decodedToken', decodedToken);

				// const user: User = {
				// 	userId: 2,
				// 	name: 'User name getting from jwt token',
				// 	email: 'User email getting from jwt token',
				// 	image: 'User image getting from jwt token',
				// 	userType: 'User type',
				// 	accessToken: 'Backend acces token here',
				// };

				// if (!user) {
				// 	throw new Error('User not found.');
				// }

				// return user;

				return {
					userId: 2,
					userName: 'User name getting from jwt token',
					accessToken: data.accessToken
				}
			},
		}),
	],
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);

export interface LoginResponse {
	refreshToken: string;
	accessToken: string;
}

export const signInSchema = object({
	// email: string({ required_error: 'Email is required' })
	// 	.min(1, 'Email is required')
	// 	.email('Invalid email'),
	userName: string({ required_error: 'User Name is required' }).min(1, 'User Name is required'),
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
