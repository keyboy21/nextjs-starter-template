import '@/styles/global.css';
import type { LayoutComponent } from '@/types/component.types';
import { cn } from '@/libs/cn.util';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

const RootLayout: LayoutComponent = async ({
	children,
	params: { locale },
}) => {
	return (
		<html lang={locale}>
			<body
				className={cn(inter.className, 'bg-[#EEF1F6] text-balance antialiased')}
			>
				<h1>Root layout</h1>
				<div className="border-4 border-blue-800">{children}</div>
			</body>
		</html>
	);
};

export default RootLayout;
