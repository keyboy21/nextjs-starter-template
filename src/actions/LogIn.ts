'use server';

import { signIn } from '@/auth';

export async function logIn(email: string, password: string) {
	await signIn('credentials', { email, password, redirectTo: '/' });
}
