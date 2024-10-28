// components/SignedInHeader.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function SignedInHeader() {
    const [isScrolled, setIsScrolled] = useState(false);

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
                    {/* <Link href="/auth/login">
                        <button className="px-6 py-2 rounded-full bg-orange-400 hover:bg-orange-500 text-white transition-colors">
                            Log in
                        </button>
                    </Link>
                    <Link href="/auth/register">
                        <button className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                            Sign up
                        </button>
                    </Link> */}
                </div>
            </div>
        </nav>
    );
}