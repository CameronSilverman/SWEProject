'use client';
import IssueCard from '@/components/card/issueCard';

// Mock data type
interface Issue {
	id: string;
	title: string;
	assignee: string;
	difficulty: 'Easy' | 'Medium' | 'Hard';
	technologies: string[];
	description: string;
}

// Mock data
const mockIssues: Issue[] = [
	{
		id: '1',
		title: 'Implement User Authentication',
		assignee: 'Sarah Chen',
		difficulty: 'Hard',
		technologies: ['typescript', 'next-auth', 'prisma'],
		description:
			'Set up user authentication system using Next-Auth. Include Google OAuth and email/password authentication. Ensure proper session management and database integration. Set up user authentication system using Next-Auth. Include Google OAuth and email/password authentication. Ensure proper session management and database integration. Set up user authentication system using Next-Auth. Include Google OAuth and email/password authentication. Ensure proper session management and database integration.',
	},
	{
		id: '2',
		title: 'Create Responsive Navigation Menu',
		assignee: 'Mike Rodriguez',
		difficulty: 'Medium',
		technologies: ['react', 'tailwind', 'typescript'],
		description:
			'Develop a responsive navigation menu that collapses into a hamburger menu on mobile devices. Include smooth animations and proper accessibility attributes.',
	},
	{
		id: '3',
		title: 'Fix Project Card Loading State',
		assignee: 'Alex Thompson',
		difficulty: 'Easy',
		technologies: ['react', 'typescript'],
		description:
			'Add proper loading skeleton state to project cards when fetching data. Ensure smooth transition between loading and loaded states.',
	},
	{
		id: '4',
		title: 'Implement Real-time Chat Feature',
		assignee: 'Emily Watson',
		difficulty: 'Hard',
		technologies: ['socket.io', 'react', 'node'],
		description:
			'Create a real-time chat system for project collaboration. Include typing indicators, read receipts, and message persistence using Socket.io.',
	},
	{
		id: '5',
		title: 'Optimize Image Loading',
		assignee: 'David Kim',
		difficulty: 'Medium',
		technologies: ['next.js', 'sharp', 'typescript'],
		description:
			'Implement lazy loading and proper image optimization using Next.js Image component. Add blur placeholder and ensure responsive image sizes.',
	},
	{
		id: '6',
		title: 'Add Dark Mode Support',
		assignee: 'Lisa Patel',
		difficulty: 'Medium',
		technologies: ['tailwind', 'react', 'typescript'],
		description:
			'Implement system-wide dark mode support using Tailwind CSS. Include proper color schemes and smooth transition animations between modes.',
	},
	{
		id: '7',
		title: 'Setup CI/CD Pipeline',
		assignee: 'James Wilson',
		difficulty: 'Hard',
		technologies: ['github-actions', 'jest', 'docker'],
		description:
			'Configure GitHub Actions for automated testing and deployment. Include unit test runs, build verification, and automated deployments to staging.',
	},
	{
		id: '8',
		title: 'Add Error Boundary Components',
		assignee: 'Maria Garcia',
		difficulty: 'Easy',
		technologies: ['react', 'typescript'],
		description:
			'Implement error boundary components to gracefully handle and display runtime errors. Include error logging and user-friendly error messages.',
	},
	{
		id: '9',
		title: 'Implement Search Functionality',
		assignee: 'Tom Anderson',
		difficulty: 'Medium',
		technologies: ['elasticsearch', 'react', 'typescript'],
		description:
			'Add real-time search functionality with proper debouncing and highlighting. Include filters for technologies and difficulty levels.',
	},
	{
		id: '10',
		title: 'Create API Documentation',
		assignee: 'Nina Taylor',
		difficulty: 'Easy',
		technologies: ['swagger', 'markdown'],
		description:
			'Document all API endpoints using Swagger/OpenAPI specification. Include request/response examples and error scenarios.',
	},
	{
		id: '11',
		title: 'Implement Data Visualization',
		assignee: 'Robert Lee',
		difficulty: 'Hard',
		technologies: ['d3.js', 'react', 'typescript'],
		description:
			'Create interactive charts and graphs for project analytics dashboard. Include proper animations and responsive design.',
	},
	{
		id: '12',
		title: 'Add Form Validation',
		assignee: 'Sophie Martin',
		difficulty: 'Medium',
		technologies: ['react-hook-form', 'zod', 'typescript'],
		description:
			'Implement client-side form validation using React Hook Form and Zod. Include proper error messages and field highlighting.',
	},
];

export default function Page() {
	return (
		<main className="min-h-screen pt-32 pb-12 px-6 md:px-12 lg:px-24">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{mockIssues.map(issue => (
					<IssueCard
						key={issue.id}
						title={issue.title}
						assignee={issue.assignee}
						difficulty={issue.difficulty}
						technologies={issue.technologies}
						description={issue.description}
					/>
				))}
			</div>
		</main>
	);
}
