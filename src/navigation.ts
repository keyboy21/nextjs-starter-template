import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { routing } from './configs/i18n.config';

export const { Link, redirect, usePathname, useRouter, permanentRedirect } =
	createSharedPathnamesNavigation(routing);
