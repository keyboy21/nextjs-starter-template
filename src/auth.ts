import { BASE_URL } from '@/configs/env.config';
import NextAuth from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from '@/configs/auth.config';
import { loginSchema } from '@/schemas/login.schema';
import type { User } from '@/types/user.type';
import { logIn } from './api/auth/logIn.api';

export const config = {
	...authConfig,
	providers: [
		Credentials({
			credentials: {
				username: {
					label: 'User Name',
					type: 'username',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {

				const { userName, password } = await loginSchema.parseAsync(credentials);

				const res = await logIn(userName, password);

				if (!res) {
					throw new Error('Login failed');
				}

				const User: User = {
					id: `${res.id}`,
					userName: res.userName,
					firstName: res.firstName,
					lastName: res.lastName,
					gender: res.gender,
					email: res.email,
					image: res.image,
					token: res.token,
					refreshToken: res.refreshToken,
				};

				return User;
			},
		}),
	],
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);

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
