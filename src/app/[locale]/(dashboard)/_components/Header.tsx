'use client';

import { Router } from '@/configs/router.config';
import { cn } from '@/lib/utils';
import Logo from '@public/logo.webp';
import NextImage from 'next/image';
import type { ComponentProps, FC } from 'react';
import { LangSwitch } from './LangSwitch';
import { Link } from '@/navigation';

export const Header: FC<HeaderProps> = ({ className }) => {
	return (
		<header className={cn('flex justify-between px-7 py-5', className)}>
			<Link href={Router.Home} className="flex gap-3 items-center">
				<NextImage src={Logo} className="size-12" alt="logo" />
			</Link>
			<LangSwitch />
			<div>Profile</div>
		</header>
	);
};

type HeaderProps = ComponentProps<'header'>;
