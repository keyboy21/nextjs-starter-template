import { auth } from '@/auth';
import { redirect } from '@/navigation';
import type { PageComponent } from '@/types/component.types';

const DashboardPage: PageComponent = async () => {
	// const session = await auth();
	// if (!session) {
	// 	redirect('/auth/login');
	// }
	return (
		<section>
			<h1>Dashboard Home page</h1>
			{/* <p>Id:{session?.user?.userId}</p>
			<p>Email:{session?.user?.email}</p>
			<p>Name: {session?.user?.name}</p>
			<p>Image: {session?.user?.image}</p>
			<p>Type: {session?.user?.userType}</p>
			<p>Type: {JSON.stringify(session, null, 4)}</p> */}
		</section>
	);
};

export default DashboardPage;
