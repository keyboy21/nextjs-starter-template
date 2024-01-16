import { authConfig } from '@/configs/auth.config';
import { getServerSession } from 'next-auth';

export const getCurrentUser = async () => {
	const session = await getServerSession(authConfig);
	const user = session?.user ?? null;

	return user;
};
