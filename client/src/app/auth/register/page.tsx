'use client';

import { useForm } from 'react-hook-form';
import Link from 'next/link';
import '../globals.css';
import ky, { HTTPError, TimeoutError } from 'ky';
import { HTTPStatusCodes } from '@/util/http';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface UserRegisterRequest {
	email: string;
	username: string;
	password: string;
}

export default function SignUpPage() {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<UserRegisterRequest>();

	// todo: make the timeout error look pretty
	const [timeout, setTimeout] = useState(false);

	const onSubmit = handleSubmit(async data => {
		try {
			await ky.post(`${process.env.NEXT_PUBLIC_API_BASE}/user/create`, {
				json: data,
				credentials: 'include',
			});
		} catch (error) {
			if (
				error instanceof HTTPError &&
				error.response.status === HTTPStatusCodes.CONFLICT
			) {
				if (error.response.statusText === 'Email')
					return setError('email', { message: 'Email already in use' });

				if (error.response.statusText === 'Username')
					return setError('username', { message: 'Username already in use' });
			}

			if (error instanceof TimeoutError) return setTimeout(true);
		}

		router.replace('/auth/login')
	});

	return (
		<main>
			<div className="background-div-style">
				<div className="link-div-style">
					<Link href="/">
						<button className="orange-round-button">Home</button>
					</Link>
				</div>
				<div className="flex flex-col align-middle bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
					<h2 className="text-center text-2xl font-bold mb-6">
						Sign up for CollabraGator
					</h2>

					<form onSubmit={onSubmit} className="space-y-4">
						{/* Username field */}
						<div>
							<input
								{...register('username', {
									required: 'Username is required',
									minLength: {
										value: 4,
										message: 'Username must be at least 4 characters',
									},
								})}
								id="username"
								type="text"
								placeholder="User Name"
								className="w-full px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white"
							/>
							{errors.username && (
								<p className="text-red-500 text-sm mt-1">
									{errors.username.message}
								</p>
							)}
						</div>

						{/* Email field */}
						<div>
							<input
								{...register('email', {
									required: 'Email is required',
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: 'Invalid email address',
									},
								})}
								id="email"
								type="email"
								placeholder="Email"
								className="w-full px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white"
							/>
							{errors.email && (
								<p className="text-red-500 text-sm mt-1">
									{errors.email.message}
								</p>
							)}
						</div>

						{/* Password field */}
						<div>
							<input
								{...register('password', {
									required: 'Password is required',
									minLength: {
										value: 8,
										message: 'Password must be at least 8 characters',
									},
								})}
								id="password"
								type="password"
								placeholder="Password"
								className="w-full px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white"
							/>
							{errors.password && (
								<p className="text-red-500 text-sm mt-1">
									{errors.password.message}
								</p>
							)}
						</div>

						{/* Submit button */}
						<div>
							<button
								type="submit"
								className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-200"
							>
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}
