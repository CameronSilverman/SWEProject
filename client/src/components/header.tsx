// components/Header.tsx
'use client';

import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, ReactNode } from 'react';

const HeaderButton = ({
	color,
	children,
	href,
}: {
	href: string;
	color: 'orange' | 'blue';
	children: ReactNode;
}) => {
	const colorString =
		color === 'orange'
			? 'bg-orange-400 hover:bg-orange-500'
			: 'bg-blue-600 hover:bg-blue-700';

	return (
		<Link href={href}>
			<button
				className={`px-6 py-2 rounded-full text-white transition-colors ${colorString}`}
			>
				{children}
			</button>
		</Link>
	);
};

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className={`fixed w-full z-50 transition-all duration-300 ${
				isScrolled
					? 'py-4 bg-white/10 backdrop-blur-md shadow-lg'
					: 'py-6 bg-transparent'
			}`}
		>
			<div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
				<Link
					href="/"
					className="text-white text-2xl font-mono font-bold tracking-wide"
				>
					CollabraGator
				</Link>

				{/* TODO: Make it work with session_token */}

				{/* Signed Out Buttons */}
				<div className="flex gap-4">
					<SignedOut>
						<HeaderButton href="/auth/login" color="orange">
							Log in
						</HeaderButton>
						<HeaderButton href="/auth/register" color="blue">
							Sign up
						</HeaderButton>
					</SignedOut>
					<SignedIn>
						<HeaderButton href="/dashboard" color="blue">
							Dashboard
						</HeaderButton>
						<HeaderButton href="/profile" color="blue">
							Profile
						</HeaderButton>
					</SignedIn>
				</div>
			</div>
		</nav>
	);
}
