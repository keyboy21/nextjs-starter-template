import NextAuth from 'next-auth';

declare module 'next-auth' {
	interface Session {
		user: {
			userid: number;
			email: string;
			name: string;
		};

		backendTokens: {
			accessToken: string;
			refreshToken: string;
			expiresIn: number;
		};
	}
}

import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
	interface JWT {
		user: {
			userid: number;
			email: string;
			name: string;
		};

		backendTokens: {
			accessToken: string;
			refreshToken: string;
			expiresIn: number;
		};
	}
}
