import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { authConfig } from '@/configs/auth.config';
import { getCurrentUser } from '@/utils/auth.util';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import type { ReactNode } from 'react';
import { AuthProvider } from './auth-provider';

const Dashboardlayout = async ({ children }: { children: ReactNode }) => {
	const user = await getCurrentUser();
	// if (user === null) {
	// 	redirect('/auth/login');
	// }

	const session = await getServerSession(authConfig);
	return (
		<AuthProvider session={session}>
			<Header />
			<div className="flex gap-7 mt-10">
				<Sidebar />
				<main className="w-full mr-7">{children}</main>
			</div>
		</AuthProvider>
	);
};

export default Dashboardlayout;
