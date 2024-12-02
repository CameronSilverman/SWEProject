'use server';

import { ProjectCreateFormData } from '@/components/form/project/project-create-form';
import { db } from './db';
import { projectContributors, projects } from './db/schema';
import { eq } from 'drizzle-orm';

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

	return res[0].id;
}

export async function getUserProjects(userId: string) {
	return await db
		.select({ name: projects.name, id: projects.id })
		.from(projects)
		.innerJoin(
			projectContributors,
			eq(projects.id, projectContributors.projectId)
		)
		.where(eq(projectContributors.userId, userId));
}
