import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ClerkProvider } from '@clerk/nextjs';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'CollabraGator',
	description: 'Welcome!',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col relative`}
				>
					{/* Global Gradient Background */}
					<div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-500 to-orange-400 opacity-90" />

					<div className="relative z-10 flex flex-col min-h-screen">
						<Header />

						<main className="z-10 flex-grow flex items-center justify-center px-4">
							{children}
						</main>

						<Footer />
					</div>
				</body>
			</html>
		</ClerkProvider>
	);
}
