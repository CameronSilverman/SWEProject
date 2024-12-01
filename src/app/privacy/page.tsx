import Link from 'next/link';

export default function Page() {
	return (
		<main className="min-h-screen relative">
			<div className="relative z-10 max-w-4xl mx-auto px-4 pt-32 pb-12">
				<h1 className="text-4xl font-bold text-white mb-8 text-center">
					Privacy Policy
				</h1>

				<div className="space-y-6 text-gray-100 backdrop-blur-sm bg-white/10 p-8 rounded-xl">
					<section>
						<h2 className="text-2xl font-semibold mb-4">
							1. Information We Collect
						</h2>
						<p className="mb-4">
							We collect information you provide directly to us, including your
							name, email address, and university affiliation when you register
							for an account.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							2. How We Use Your Information
						</h2>
						<p className="mb-4">We use the information we collect to:</p>
						<ul className="list-disc pl-6 space-y-2">
							<li>Provide, maintain, and improve our services</li>
							<li>Connect you with other students and projects</li>
							<li>Send you technical notices and updates</li>
							<li>Respond to your comments and questions</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							3. Information Sharing
						</h2>
						<p className="mb-4">
							We do not share your personal information with third parties
							except as described in this privacy policy or with your consent.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
						<p className="mb-4">
							We take reasonable measures to help protect your personal
							information from loss, theft, misuse, and unauthorized access.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
						<p className="mb-4">
							You have the right to access, update, or delete your personal
							information at any time through your account settings.
						</p>
					</section>

					<div className="mt-8 text-center">
						<Link href="/">
							<button className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-lg">
								Back to Home
							</button>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
