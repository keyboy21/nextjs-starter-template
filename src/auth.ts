import { BASE_URL } from '@/configs/env.config';
import NextAuth, { type User } from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './configs/auth.config';
// import { loginSchema } from './schemas/Login.schema';

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
				// const { userName, password } =
				// 	await loginSchema.parseAsync(credentials);

				// const res = await fetch(`${BASE_URL}/auth/login`, {
				// 	method: 'POST',
				// 	body: JSON.stringify({
				// 		userName,
				// 		password,
				// 	}),
				// 	headers: {
				// 		'Content-Type': 'application/json',
				// 	},
				// });

				// if (!res.ok) {
				// 	console.log(res.statusText);
				// 	throw new Error('Login failed');
				// }

				// const data = (await res.json()) as LoginResponse;

				// console.log('login response', data);

				// const { accessToken, refreshToken } = data;

				// const decodedToken = await decode({
				// 	token: accessToken,
				// 	secret: 'secret',
				// 	salt: 'salt',
				// });

				// if (!user) {
				// 	throw new Error('User not found.');
				// }
				// console.log('decodedToken', decodedToken);

				const user: User = {
					userId: 2,
					userName: 'User name getting from jwt token',
					accessToken: 'Backend acces token here',
					// email: 'User email getting from jwt token',
					// image: 'User image getting from jwt token',
				};

				return user;
			},
		}),
	],
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);

export interface LoginResponse {
	refreshToken: string;
	accessToken: string;
}

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
