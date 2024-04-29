'use client';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { FC, ReactNode } from 'react';

export const AuthProvider: FC<AuthProviderProps> = ({ session, children }) => {
	return <SessionProvider session={session}>{children}</SessionProvider>;
};

interface AuthProviderProps {
	children: ReactNode;
	session: Session | null;
}
