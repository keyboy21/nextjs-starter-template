import { ComponentProps, FC } from 'react';
import NextImage from 'next/image';
import { Title } from '@tremor/react';
import Logo from '../../../public/logo.webp';

export const Header: FC<HeaderProps> = ({ className }) => {
	return (
		<header className="flex justify-between px-7 py-5">
			<div className="flex gap-3 items-center">
				<NextImage src={Logo} className="size-12" alt="logo" />
				<Title>T-bot Dashboard</Title>
			</div>
			<div>Profile</div>
		</header>
	);
};

type HeaderProps = ComponentProps<'header'>;
