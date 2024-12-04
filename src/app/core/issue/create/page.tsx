import { IssueCreateForm } from '@/components/form/issue/issue-create-form';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { getUserProjects } from '@/lib/projects';
import { auth } from '@clerk/nextjs/server';
import { Suspense } from 'react';

async function IssueCreateFormWithData() {
	const authObj = await auth();
	const userProjects = await getUserProjects(authObj.userId!);

	return (
		<IssueCreateForm
			userProjects={userProjects.map(v => ({
				id: v.projects.id,
				name: v.projects.name!,
			}))}
		/>
	);
}

export default async function Page() {
	return (
		<div className="min-h-screen flex items-center w-full max-w-3xl">
			<Card>
				<CardHeader>
					<CardTitle>Create Issue</CardTitle>
					<CardDescription>
						Create an issue for any one of your projects here.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Suspense fallback={<div>Loading project data...</div>}>
						<IssueCreateFormWithData />
					</Suspense>
				</CardContent>
			</Card>
		</div>
	);
}
