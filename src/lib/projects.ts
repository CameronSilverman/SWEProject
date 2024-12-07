'use server';

import { ProjectCreateFormData } from '@/components/form/project/project-create-form';
import { db } from './db';
import { projectContributors, projects } from './db/schema';
import { eq } from 'drizzle-orm';
import { revalidateTag, unstable_cache } from 'next/cache';

export async function createProjectWithData(
	userId: string,
	data: ProjectCreateFormData
) {
	// create the project
	const res = await db
		.insert(projects)
		.values({
			name: data.title,
			description: data.description,
		})
		.returning();

	// add the user as the owner
	await db.insert(projectContributors).values({
		projectId: res[0].id,
		userId,
		role: 'owner',
	});

	revalidateTag('projects');

	return res[0].id;
}

export const getAllProjects = unstable_cache(
	async () => {
		return await db
			.select()
			.from(projects)
			.innerJoin(
				projectContributors,
				eq(projects.id, projectContributors.projectId)
			);
	},
	['user-projects'],
	{ revalidate: 3600, tags: ['user-projects'] }
);

export const getUserProjects = unstable_cache(
	async (userId: string) => {
		return await db
			.select()
			.from(projects)
			.innerJoin(
				projectContributors,
				eq(projects.id, projectContributors.projectId)
			)
			.where(eq(projectContributors.userId, userId));
	},
	['projects'],
	{ revalidate: 3600, tags: ['projects'] }
);
