import { ProfileCard } from '@/components/card/profile-card';
import { UserProjectDisplay } from '@/components/display/user-project-display';
import { getUserProfile } from '@/lib/users';
import { auth, clerkClient } from '@clerk/nextjs/server';

export default async function Page() {
	const authContext = await auth();

	const clerkApiClient = await clerkClient();
	const userResponse = await clerkApiClient.users.getUser(authContext.userId!);

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
					username={userResponse.username!}
				/>

				{/* Projects Section */}
				<UserProjectDisplay userId={authContext.userId!} />
			</div>
		</main>
	);
}
