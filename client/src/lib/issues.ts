import { IssueCreateFormData } from '@/components/form/issue/issue-create-form';
import { db } from './db';
import { projectTasks } from './db/schema';

'use server'

export async function createIssueWithData(data: IssueCreateFormData) {
	const res = await db.insert(projectTasks).values({
		title: data.title,
		description: data.description,
		projectId: parseInt(data.project),
		difficulty: data.difficulty,
		assigned: []
	}).returning();

	return res[0].id;
}