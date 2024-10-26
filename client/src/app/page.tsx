"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import "./globals.css";

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Add scroll event listener
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
        <main className="min-h-screen relative">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-500 to-orange-400 opacity-90" />

            {/* Navigation - Now with conditional styling */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? 'py-4 bg-white/10 backdrop-blur-md shadow-lg'
                    : 'py-6 bg-transparent'
            }`}>
                <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
                    <Link href="/" className="text-white text-2xl font-mono font-bold tracking-wide">
                        CollabraGator
                    </Link>

                    <div className="flex gap-4">
                        <Link href="/sign_in_page">
                            <button className="px-6 py-2 rounded-full bg-orange-400 hover:bg-orange-500 text-white transition-colors">
                                Log in
                            </button>
                        </Link>
                        <Link href="/sign_up_page">
                            <button className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                                Sign up
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content - Added padding-top to account for fixed nav */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 pt-32 text-center">
                {/* Hero Section */}
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-wide drop-shadow-lg">
                    Contribute to open source projects with fellow students from your university
                </h1>

                <div className="mt-12 flex justify-center">
                    <Link href="/project_creation">
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
                            Connect with talented students who share your interests and technical expertise.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg backdrop-blur-sm bg-white/10">
                        <h3 className="text-xl font-semibold mb-3">Build Portfolio</h3>
                        <p className="text-gray-100">
                            Showcase your contributions and build a strong portfolio for future opportunities.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg backdrop-blur-sm bg-white/10">
                        <h3 className="text-xl font-semibold mb-3">Learn & Grow</h3>
                        <p className="text-gray-100">
                            Gain real-world experience working on meaningful open source projects.
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
                    <h2 className="text-2xl font-bold text-white mb-4">Ready to start contributing?</h2>
                    <p className="text-gray-100 mb-6">Join your university's open source community today.</p>
                    <Link href="/sign_up_page">
                        <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-lg">
                            Create Account
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}