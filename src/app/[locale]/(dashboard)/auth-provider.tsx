'use client';
import type { FC, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';

export const AuthProvider: FC<AuthProviderProps> = ({ session, children }) => {
	return <SessionProvider session={session}>{children}</SessionProvider>;
};

interface AuthProviderProps {
	children: ReactNode;
	session: Session | null;
}
