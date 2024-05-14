import { Header } from '@/app/[locale]/(dashboard)/_components/Header';
import { Sidebar } from '@/app/[locale]/(dashboard)/_components/Sidebar';
import type { ReactNode } from 'react';

const Dashboardlayout = async ({ children }: { children: ReactNode }) => {
	return (
		<body className="bg-[#EEF1F6]">
			<Header />
			<div className="flex gap-7 mt-10">
				<Sidebar />
				<main className="w-full mr-7">{children}</main>
			</div>
		</body>
	);
};

export default Dashboardlayout;
