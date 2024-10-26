"use client";
import Link from "next/link";
import "../globals.css";

export default function Home() {
    return (
        <main>
            {/* Background Container */}
            <div className="background-div-style min-h-screen relative">
                {/* Navigation Bar */}
                <div className="w-full absolute top-0 left-0 px-10 py-4 flex justify-between items-center">
                    {/* Log In Button - Left */}
                    <div className="absolute top-4 left-4">
                        <Link href="/sign_in_page">
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                                Log In
                            </button>
                        </Link>
                    </div>

                    {/* Project Creation Page Button - Center */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                        <Link href="/project_creation">
                            <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-neutral-300 transition-colors">
                                Project Creation Page
                            </button>
                        </Link>
                    </div>

                    {/* Sign Up Button - Right */}
                    <div className="absolute top-4 right-4">
                        <Link href="/sign_up_page">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                                Signup
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-10 mt-24">
                    {/* Profile Section */}
                    <div className="bg-white rounded-xl p-8 shadow-lg text-center w-80 lg:w-96">
                        <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-r from-teal-200 to-pink-100"></div>
                        <h1 className="text-3xl mt-4 font-semibold">John Doe</h1>
                        <p className="text-gray-500 mb-4">@jonnyDoe</p>
                        <p className="text-sm text-gray-700">
                            Passionate programmer and lifelong learner at the University of Florida! I thrive on coding challenges and enjoy collaborating with fellow Gators to create innovative solutions every day.
                        </p>
                    </div>

                    {/* Projects Section */}
                    <div className="bg-white rounded-xl p-8 shadow-lg w-80 lg:w-96">
                        <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
                        <div className="bg-gray-100 rounded-lg p-4 shadow-inner">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-bold text-lg">CollabraGator</span>
                                <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-lg">New</span>
                            </div>
                            <div className="text-gray-600 text-sm mb-4">javascript, react</div>
                            <p className="text-sm text-gray-600">
                                This is where the project description goes for a project card, which is in fact different from an item card. You can find those over on the dashboard view.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
