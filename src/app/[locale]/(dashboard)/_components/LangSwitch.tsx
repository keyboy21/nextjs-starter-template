'use client';
import { Link, usePathname } from '@/navigation';

export const LangSwitch = () => {
	const pathName = usePathname();
	return (
		<div className="flex gap-6">
			<Link href={pathName} locale="ru">
				RU
			</Link>
			<Link href={pathName} locale="en">
				EN
			</Link>
			<Link href={pathName} locale="uz">
				UZ
			</Link>
		</div>
	);
};
