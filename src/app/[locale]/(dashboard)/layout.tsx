import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import type { ReactNode } from 'react';

const Dashboardlayout = async ({ children }: { children: ReactNode }) => {
	return (
		<>
			<h1>Dashboard layout</h1>
			<div className="border-2 border-red-700">
				<Header />
				<div className="flex gap-7 mt-10">
					<Sidebar />
					<main className="w-full mr-7">{children}</main>
				</div>
			</div>
		</>
	);
};

export default Dashboardlayout;
