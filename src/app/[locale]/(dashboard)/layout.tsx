import { Header } from '@/app/[locale]/(dashboard)/_components/Header';
import { Sidebar } from '@/app/[locale]/(dashboard)/_components/Sidebar';
import type { LayoutComponent } from '@/types/component.types';
import type { ReactNode } from 'react';

const Dashboardlayout: LayoutComponent = async ({ children }) => {
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
