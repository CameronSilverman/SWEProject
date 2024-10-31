"use client";

import ProjectCard from "@/app/_components/cards/ProjectCard";

export default function ProfilePage() {
    const projects = [
        {
            id: 1,
            name: "CollabraGator",
            tags: ["javascript", "react", "nextjs"],
            description: "A collaborative platform for UF students to find project partners and share resources.",
            status: "New",
            statusColor: "bg-green-500",
            lastUpdated: "2 days ago",
            stars: 24,
            collaborators: 3
        },
        {
            id: 2,
            name: "StudySwamp",
            tags: ["python", "django", "postgresql"],
            description: "AI-powered study group matching system for campus organizations.",
            status: "In Progress",
            statusColor: "bg-blue-500",
            lastUpdated: "5 days ago",
            stars: 15,
            collaborators: 4
        },
        {
            id: 3,
            name: "GatorEvents",
            tags: ["typescript", "react-native", "firebase", "xcode"],
            description: "Mobile app for discovering and organizing campus events.",
            status: "Completed",
            statusColor: "bg-purple-500",
            lastUpdated: "2 weeks ago",
            stars: 32,
            collaborators: 5
        },
        {
            id: 4,
            name: "A new one",
            tags: ["typescript", "react-native", "firebase", "xcode", "python", "django", "postgresql", "javascript", "react", "nextjs"],
            description: "Mobile app for discovering and organizing campus events.",
            status: "Failed",
            statusColor: "bg-red-500",
            lastUpdated: "8 months ago",
            stars: 0,
            collaborators: 1
        }
    ];

    return (
        <main className="min-h-screen pt-24 pb-16">
            {/* Main Content Section */}
            <div className="flex flex-col lg:flex-row items-start justify-center space-y-10 lg:space-y-0 lg:space-x-10 mt-24 px-4">
                {/* Profile Section */}
                <div className="bg-white rounded-xl p-8 shadow-lg w-full lg:w-96">
                    <div className="relative">
                        <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-r from-teal-200 to-pink-100 mb-4"></div>
                        <div className="absolute bottom-0 right-1/3 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                    </div>

                    <h1 className="text-3xl font-semibold">John Doe</h1>
                    <p className="text-gray-500 mb-2">@jonnyDoe</p>

                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                        <span className="text-sm">Gainesville, FL</span>
                        <span className="text-sm">Joined 2023</span>
                    </div>

                    <p className="text-sm text-gray-700 mb-6">
                        Passionate programmer and lifelong learner at the University of Florida!
                        I thrive on coding challenges and enjoy collaborating with fellow Gators
                        to create innovative solutions every day.
                    </p>

                    <div className="grid grid-cols-3 gap-4 text-center border-t pt-4">
                        <div>
                            <div className="font-semibold">15</div>
                            <div className="text-xs text-gray-500">Projects</div>
                        </div>
                        <div>
                            <div className="font-semibold">1.2k</div>
                            <div className="text-xs text-gray-500">Followers</div>
                        </div>
                        <div>
                            <div className="font-semibold">48</div>
                            <div className="text-xs text-gray-500">Following</div>
                        </div>
                    </div>
                </div>

                {/* Projects Section */}
                <div className="bg-white rounded-xl p-8 shadow-lg w-full lg:w-[32rem]">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold">Recent Projects</h2>
                        <button className="text-sm text-blue-500 hover:text-blue-600">View All</button>
                    </div>

                    <div className="space-y-6">
                        {projects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}