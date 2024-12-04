'use server';

import { IssueCreateFormData } from '@/components/form/issue/issue-create-form';
import { db } from './db';
import { projectTasks, userProfiles } from './db/schema';
import { eq } from 'drizzle-orm';
import { revalidateTag, unstable_cache } from 'next/cache';

export async function createIssueWithData(
	userId: string,
	data: IssueCreateFormData
) {
	const res = await db
		.insert(projectTasks)
		.values({
			creator: userId,
			title: data.title,
			description: data.description,
			projectId: parseInt(data.project),
			difficulty: data.difficulty,
			technologies: data.technologies.map(t => t.value),
			assigned: [],
		})
		.returning();

	revalidateTag('issues');

	return res[0].id;
}

export const getIssues = unstable_cache(
	async () => {
		return await db
			.select({
				id: projectTasks.id,
				title: projectTasks.title,
				description: projectTasks.description,
				difficulty: projectTasks.difficulty,
				technologies: projectTasks.technologies,
				creator: projectTasks.creator,
				creatorFirstName: userProfiles.firstName,
				creatorLastName: userProfiles.lastName,
			})
			.from(projectTasks)
			.leftJoin(userProfiles, eq(projectTasks.creator, userProfiles.id));
	},
	['issues'],
	{ revalidate: 3600, tags: ['issues'] }
);
