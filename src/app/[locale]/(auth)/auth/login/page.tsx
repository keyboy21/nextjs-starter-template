import { Container } from '@/components/ui/Container';
import { LoginForm } from './_components/LoginForm';

const LoginPage = () => {
	return (
		<section className="pt-16">
			<h1 className="text-center text-3xl mb-10">Login</h1>
			<Container className="flex justify-center items-center">
				<LoginForm />
			</Container>
		</section>
	);
};

export default LoginPage;
