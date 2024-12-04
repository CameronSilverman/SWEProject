import { ProfileCard } from '@/components/card/profile-card';
import { ProjectCard } from '@/components/card/project-card';
import { ProjectDisplay } from '@/components/display/project-display';
import { getUserProfile } from '@/lib/users';
import { auth } from '@clerk/nextjs/server';

export default async function Page() {
	const projects = [
		{
			id: 1,
			name: 'CollabraGator',
			tags: ['javascript', 'react', 'nextjs'],
			description:
				'A collaborative platform for UF students to find project partners and share resources.',
			status: 'New',
			statusColor: 'bg-green-500',
			lastUpdated: '2 days ago',
			stars: 24,
			collaborators: 3,
		},
		{
			id: 2,
			name: 'StudySwamp',
			tags: ['python', 'django', 'postgresql'],
			description:
				'AI-powered study group matching system for campus organizations.',
			status: 'Open',
			statusColor: 'bg-blue-500',
			lastUpdated: '5 days ago',
			stars: 15,
			collaborators: 4,
		},
		{
			id: 3,
			name: 'GatorEvents',
			tags: ['typescript', 'react-native', 'firebase', 'xcode'],
			description: 'Mobile app for discovering and organizing campus events.',
			status: 'Archived',
			statusColor: 'bg-purple-500',
			lastUpdated: '2 weeks ago',
			stars: 32,
			collaborators: 5,
		},
		{
			id: 4,
			name: 'A new one',
			tags: [
				'typescript',
				'react-native',
				'firebase',
				'xcode',
				'python',
				'django',
				'postgresql',
				'javascript',
				'react',
				'nextjs',
			],
			description: 'Mobile app for discovering and organizing campus events.',
			status: 'Closed',
			statusColor: 'bg-red-500',
			lastUpdated: '8 months ago',
			stars: 0,
			collaborators: 1,
		},
	];

	const authContext = await auth();

	const userProfile = (await getUserProfile(authContext.userId!))[0];

	return (
		<main className="min-h-screen pt-24 pb-16">
			{/* Main Content Section */}
			<div className="flex flex-col lg:flex-row items-start justify-center space-y-10 lg:space-y-0 lg:space-x-10 mt-24 px-4">
				<ProfileCard
					firstName={userProfile.firstName}
					lastName={userProfile.lastName}
					biography={userProfile.biography!}
					techInterests={userProfile.technicalInterests!}
					programmingLanguages={userProfile.programmingLanguages!}
					username="colinmcclure"
				/>

				{/* Projects Section */}
				<ProjectDisplay userId={authContext.userId!} />
			</div>
		</main>
	);
}
