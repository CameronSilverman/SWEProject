'use client';

import Link from 'next/link';

export default function Home() {
	return (
		<main className="min-h-screen relative">
			{/* Main Content - Added padding-top to account for fixed nav */}
			<div className="relative z-10 max-w-4xl mx-auto px-4 pt-32 text-center">
				{/* Hero Section */}
				<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-wide drop-shadow-lg">
					Contribute to open source projects with fellow students from your
					university
				</h1>

				<div className="mt-12 flex justify-center">
					{/*
                        If signed out: take user to sign-up page
                        If signed in: take user to dashboard, project exploration page, or project creation page - tbd
                    */}
					<Link href="/auth/register">
						<button className="px-8 py-3 text-lg rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-lg">
							Get Started Now
						</button>
					</Link>
				</div>

				{/* Features Section */}
				<div className="mt-32 grid md:grid-cols-3 gap-8 text-white">
					<div className="p-6 rounded-lg backdrop-blur-sm bg-white/10">
						<h3 className="text-xl font-semibold mb-3">Find Collaborators</h3>
						<p className="text-gray-100">
							Connect with talented students who share your interests and
							technical expertise.
						</p>
					</div>

					<div className="p-6 rounded-lg backdrop-blur-sm bg-white/10">
						<h3 className="text-xl font-semibold mb-3">Build Portfolio</h3>
						<p className="text-gray-100">
							Showcase your contributions and build a strong portfolio for
							future opportunities.
						</p>
					</div>

					<div className="p-6 rounded-lg backdrop-blur-sm bg-white/10">
						<h3 className="text-xl font-semibold mb-3">Learn & Grow</h3>
						<p className="text-gray-100">
							Gain real-world experience working on meaningful open source
							projects.
						</p>
					</div>
				</div>

				{/* Stats Section */}
				<div className="mt-24 flex justify-center gap-12 text-white">
					<div>
						<div className="text-4xl font-bold">500+</div>
						<div className="text-gray-200">Active Projects</div>
					</div>
					<div>
						<div className="text-4xl font-bold">1000+</div>
						<div className="text-gray-200">Students</div>
					</div>
					<div>
						<div className="text-4xl font-bold">50+</div>
						<div className="text-gray-200">Universities</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className="mt-24 mb-12 p-8 rounded-xl backdrop-blur-sm bg-white/10">
					<h2 className="text-2xl font-bold text-white mb-4">
						Ready to start contributing?
					</h2>
					<p className="text-gray-100 mb-6">
						Join your university&apos;s open source community today.
					</p>
					<Link href="/auth/register">
						<button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-lg">
							Create Account
						</button>
					</Link>
				</div>
			</div>
		</main>
	);
}
