'use client';
import ProjectCard from '@/components/card/projectCard';

// Mock data type
interface Project {
	id: number;
	name: string;
	tags: string[];
	description: string;
	status: string;
	statusColor: string;
	lastUpdated: string;
	stars: number;
	collaborators: number;
}

// Mock data
const mockProjects: Project[] = [
	{
		id: 1,
		name: 'CollabraGator',
		tags: ['React', 'TypeScript', 'Tailwind'],
		description:
			'A platform for students to collaborate on open source projects and build their portfolio',
		status: 'Active',
		statusColor: 'bg-green-500',
		lastUpdated: '2 days ago',
		stars: 45,
		collaborators: 8,
	},
	{
		id: 2,
		name: 'Study Buddy',
		tags: ['Next.js', 'MongoDB', 'Node.js'],
		description:
			'An AI-powered study assistant that helps students organize and optimize their learning',
		status: 'In Progress',
		statusColor: 'bg-yellow-500',
		lastUpdated: '5 days ago',
		stars: 32,
		collaborators: 5,
	},
	{
		id: 3,
		name: 'Campus Connect',
		tags: ['Vue.js', 'Firebase', 'Tailwind'],
		description:
			'A social platform for university students to connect and share resources',
		status: 'Active',
		statusColor: 'bg-green-500',
		lastUpdated: '1 week ago',
		stars: 28,
		collaborators: 6,
	},
];

export default function Page() {
	return (
		<main className="min-h-screen pt-32 pb-12 px-6 md:px-12 lg:px-24">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{mockProjects.map(project => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</main>
	);
}
