'use client';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import '../globals.css';
import ky, { HTTPError, TimeoutError } from 'ky';
import { HTTPStatusCodes } from '@/util/http';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface LoginRequest {
	email: string;
	password: string;
}

export default function SignInPage() {
	const router = useRouter();

	const { register, handleSubmit, setError } = useForm<LoginRequest>();

	// todo: make the timeout error look nice
	const [timeout, setTimeout] = useState(false);

	const onSubmit = handleSubmit(async data => {
		try {
			await ky.post(`${process.env.NEXT_PUBLIC_API_BASE}/auth/login`, {
				json: data,
				credentials: 'include',
			});
		} catch (error) {
			if (
				error instanceof HTTPError &&
				error.response.status === HTTPStatusCodes.UNAUTHORIZED
			)
				return setError('password', { message: 'Invalid password' });

			if (error instanceof TimeoutError) return setTimeout(true);
		}

		router.replace('/dashboard_page')
	});

	return (
		<main>
			<div className="background-div-style">
				<div className="link-div-style">
					<div>
						<Link href="/">Home</Link>
					</div>
				</div>
				<div className="flex flex-col align-middle bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
					<h2 className="text-center text-2xl font-bold mb-6">
						Sign in to CollabraGator
					</h2>

					<form onSubmit={onSubmit} className="space-y-4">
						{/* Email field */}
						<div>
							<input
								{...register('email')}
								type="email"
								placeholder="Email"
								className="w-full px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white"
							/>
						</div>

						{/* Password field */}
						<div>
							<input
								{...register('password')}
								type="password"
								placeholder="Password"
								className="w-full px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white"
							/>
						</div>

						{/* Submit button */}
						<div>
							<button
								type="submit"
								className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-200"
							>
								Log In
							</button>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}
