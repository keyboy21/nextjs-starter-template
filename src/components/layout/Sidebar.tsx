'use client';

import { Link, usePathname } from '@/navigation';
import { cn } from '@/utils/cn.util';
import { ComponentProps, FC } from 'react';
import { BsSpeedometer2 } from 'react-icons/bs';
import { LuLayers } from 'react-icons/lu';
import { PiArrowsLeftRight } from 'react-icons/pi';
import { BsBarChart } from 'react-icons/bs';
import { PiChartPieSlice } from 'react-icons/pi';
export const Sidebar: FC<SidebarPrps> = ({ className }) => {
	const pathName = usePathname();
	return (
		<aside className={cn('min-w-48 ml-7', className)}>
			<nav>
				<ul className="flex flex-col gap-y-4 *:w-full *:rounded-lg *:p-3">
					<li
						className={cn({
							'bg-white shadow-sm': pathName === '/',
						})}
					>
						<Link href={'/'} className="flex gap-5 items-center">
							<BsSpeedometer2 size={20} />
							Dashboard
						</Link>
					</li>
					<li
						className={cn({
							'bg-white shadow-sm': pathName === '/portfolio',
						})}
					>
						<Link className="flex gap-5 items-center" href={'/portfolio'}>
							<LuLayers size={20} />
							Portfolio
						</Link>
					</li>
					<li
						className={cn({
							'bg-white shadow-sm': pathName === '/trade',
						})}
					>
						<Link className="flex gap-5 items-center" href={'/trade'}>
							<PiArrowsLeftRight size={20} />
							Trade
						</Link>
					</li>
					<li
						className={cn({
							'bg-white shadow-sm': pathName === '/insight',
						})}
					>
						<Link className="flex gap-5 items-center" href={'/insight'}>
							<BsBarChart size={20} />
							Insight
						</Link>
					</li>
					<li
						className={cn({
							'bg-white shadow-sm': pathName === '/reports',
						})}
					>
						<Link className="flex gap-5 items-center" href={'/reports'}>
							<PiChartPieSlice size={20} />
							Reports
						</Link>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

type SidebarPrps = ComponentProps<'aside'>;
