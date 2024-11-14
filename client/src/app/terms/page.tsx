// pages/page.tsx
"use client";

import Link from "next/link";

export default function TermsOfService() {
    return (
        <main className="min-h-screen relative">
            <div className="relative z-10 max-w-4xl mx-auto px-4 pt-32 pb-12">
                <h1 className="text-4xl font-bold text-white mb-8 text-center">Terms of Service</h1>

                <div className="space-y-6 text-gray-100 backdrop-blur-sm bg-white/10 p-8 rounded-xl">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                        <p className="mb-4">
                            By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. User Registration</h2>
                        <p className="mb-4">
                            To access certain features of the platform, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. Open Source Projects</h2>
                        <p className="mb-4">
                            All projects hosted on our platform must comply with open source licensing requirements. Users are responsible for ensuring they have the necessary rights to contribute to projects.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">4. User Conduct</h2>
                        <p className="mb-4">
                            Users agree not to engage in any activity that interferes with or disrupts the platform services or servers and networks connected to the platform.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
                        <p className="mb-4">
                            Users retain all rights to their contributions while granting necessary licenses for their contributions to be used within the respective open source projects.
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