'use server';
import { signIn } from '@/configs/auth.config';

export async function logIn(email: string, password: string) {
	await signIn('credentials', { email, password });
}
