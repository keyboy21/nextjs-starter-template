import type { ReactNode } from 'react';

const Authlayout = ({ children }: { children: ReactNode }) => {
	return (
		<body>
			<main>{children}</main>
		</body>
	);
};

export default Authlayout;
