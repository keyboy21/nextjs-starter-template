import { auth } from '@/configs/auth.config';
import { redirect } from '@/navigation';
import type { PageComponent } from '@/types/component.types';

const DashboardPage: PageComponent = async () => {
	// Uncomment to check user have session
	// const session = await auth();
	// console.log('session', session);
	// if (!session) {
	// 	redirect('/auth/login');
	// }
	return (
		<section>
			<h1>Dashboard Home page</h1>
		</section>
	);
};

export default DashboardPage;
