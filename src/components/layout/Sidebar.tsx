'use client';

import { Router } from '@/configs/router.config';
import { cn } from '@/libs/cn.util';
import { Link, usePathname } from '@/navigation';
import type { ComponentProps, FC } from 'react';
import { BsSpeedometer2 } from 'react-icons/bs';
import { BsBarChart } from 'react-icons/bs';
import { LuLayers } from 'react-icons/lu';
import { PiArrowsLeftRight } from 'react-icons/pi';
import { PiChartPieSlice } from 'react-icons/pi';

export const Sidebar: FC<SidebarPrps> = ({ className }) => {
	const pathName = usePathname();
	return (
		<aside className={cn('min-w-48 ml-7', className)}>
			<nav>
				<ul className="flex flex-col gap-y-4 *:w-full *:rounded-lg *:p-3">
					<li
						className={cn({
							'bg-white shadow-sm': pathName === Router.Home,
						})}
					>
						<Link href={Router.Home} className="flex gap-5 items-center">
							<BsSpeedometer2 size={20} />
							Dashboard
						</Link>
					</li>
					<li
						className={cn({
							'bg-white shadow-sm': pathName === Router.Portfolio,
						})}
					>
						<Link className="flex gap-5 items-center" href={Router.Portfolio}>
							<LuLayers size={20} />
							Portfolio
						</Link>
					</li>
					<li
						className={cn({
							'bg-white shadow-sm': pathName === Router.Trade,
						})}
					>
						<Link className="flex gap-5 items-center" href={Router.Trade}>
							<PiArrowsLeftRight size={20} />
							Trade
						</Link>
					</li>
					<li
						className={cn({
							'bg-white shadow-sm': pathName === Router.Insight,
						})}
					>
						<Link className="flex gap-5 items-center" href={Router.Insight}>
							<BsBarChart size={20} />
							Insight
						</Link>
					</li>
					<li
						className={cn({
							'bg-white shadow-sm': pathName === Router.Reports,
						})}
					>
						<Link className="flex gap-5 items-center" href={Router.Reports}>
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
