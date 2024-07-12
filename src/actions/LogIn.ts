'use server';

import { signIn } from '@/auth';

export async function logIn(userName: string, password: string) {
	await signIn('credentials', { userName, password, redirectTo: '/' });
}
