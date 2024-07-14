'use client';

import { Router } from '@/configs/router.config';
import { cn } from '@/utils/cn';
import { Link, usePathname } from '@/navigation';
import { Gauge, Layers, ArrowLeftRight, BarChart4, PieChart } from 'lucide-react';
import type { ComponentProps, FC } from 'react';

export const Sidebar = ({ className }: SidebarPrps) => {
	const pathName = usePathname();
	return (
		<aside className={cn('min-w-48 ml-7', className)}>
			<nav>
				<ul className="flex flex-col gap-y-4 *:w-full *:rounded-lg *:p-3">
					<li
						className={cn(
							'hover:bg-slate-300 transition-colors duration-500 cursor-pointer',
							{
								'bg-white shadow-sm  hover:bg-white': pathName === Router.Home,
							})
						}
					>
						<Link href={Router.Home} className="flex gap-5 items-center">
							<Gauge size={20} />
							Dashboard
						</Link>
					</li>
					<li
						className={cn(
							'hover:bg-slate-300 transition-colors duration-500 cursor-pointer',
							{
								'bg-white shadow-sm  hover:bg-white': pathName === Router.Portfolio,
							})}
					>
						<Link className="flex gap-5 items-center" href={Router.Portfolio}>
							<Layers size={20} />
							Portfolio
						</Link>
					</li>
					<li
						className={cn(
							'hover:bg-slate-300 transition-colors duration-500 cursor-pointer',
							{
								'bg-white shadow-sm  hover:bg-white': pathName === Router.Trade,
							})}
					>
						<Link className="flex gap-5 items-center" href={Router.Trade}>
							<ArrowLeftRight size={20} />
							Trade
						</Link>
					</li>
					<li
						className={cn(
							'hover:bg-slate-300 transition-colors duration-500 cursor-pointer',
							{
								'bg-white shadow-sm  hover:bg-white': pathName === Router.Insight,
							})}
					>
						<Link className="flex gap-5 items-center" href={Router.Insight}>
							<BarChart4 size={20} />
							Insight
						</Link>
					</li>
					<li
						className={cn(
							'hover:bg-slate-300 transition-colors duration-500 cursor-pointer',
							{
								'bg-white shadow-sm  hover:bg-white': pathName === Router.Reports,
							})}
					>
						<Link className="flex gap-5 items-center" href={Router.Reports}>
							<PieChart size={20} />
							Reports
						</Link>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

interface SidebarPrps extends ComponentProps<'aside'> { }
