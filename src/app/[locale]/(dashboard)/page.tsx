import { PageComponent } from '@/types/component.types';

const DashboardPage: PageComponent = async ({ params }) => {
	console.log(params);
	return (
		<section>
			<h1>Dashboard Home page</h1>
		</section>
	);
};

export default DashboardPage;
