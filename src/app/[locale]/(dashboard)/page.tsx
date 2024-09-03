import { auth } from '@/auth';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { Time } from '@/lib/utils';
import { redirect } from '@/navigation';
import type { PageType } from '@/types/component.types';

const DashboardPage: PageType = async () => {
	// const session = await auth();
	// if (!session) {
	// 	redirect('/auth/login');
	// }
	return (
		<section>
			<Heading>Dashboard Home page</Heading>
			<Paragraph>Welcome</Paragraph>
			<Paragraph className="text-">
				{Time('2022-02-02 22:22:22').format('YYYY-MM-DD')}
			</Paragraph>
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
