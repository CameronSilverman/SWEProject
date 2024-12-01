'use server'

import { ProjectCreateFormData } from '@/components/form/project/project-create-form';
import { db } from './db';
import { projectContributors, projects } from './db/schema';

export async function createProjectWithData(userId: string, data: ProjectCreateFormData) {
	// create the project
	const res = await db.insert(projects).values({
		name: data.title,
		description: data.description,
	}).returning();

	// add the user as the owner
	await db.insert(projectContributors).values({
		projectId: res[0].id,
		userId,
		role: 'owner',
	});

	return res[0].id;
}