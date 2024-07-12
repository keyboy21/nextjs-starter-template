import z from 'zod';

export const loginSchema = z.object({
	// email: string({ required_error: 'Email is required' })
	// 	.min(1, 'Email is required')
	// 	.email('Invalid email'),
	userName: z
		.string({ required_error: 'User Name is required' })
		.min(1, 'User Name is required'),
	password: z
		.string({ required_error: 'Password is required' })
		.min(1, 'Password is required')
		.min(8, 'Password must be more than 8 characters')
		.max(32, 'Password must be less than 32 characters'),
});
