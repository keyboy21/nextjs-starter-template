import { Router } from '@/configs/router.config';
import { Link } from '@/navigation';
import { Title } from '@tremor/react';
import NextImage from 'next/image';
import type { ComponentProps, FC } from 'react';
import Logo from '../../../public/logo.webp';
import { cn } from '@/utils/cn.util';

export const Header: FC<HeaderProps> = ({ className }) => {
	return (
		<header className={cn('flex justify-between px-7 py-5', className)}>
			<Link href={Router.Home} className="flex gap-3 items-center">
				<NextImage src={Logo} className="size-12" alt="logo" />
				<Title>T-bot Dashboard</Title>
			</Link>
			<div>Profile</div>
		</header>
	);
};

type HeaderProps = ComponentProps<'header'>;
