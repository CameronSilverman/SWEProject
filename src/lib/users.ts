'use server';

import { eq } from 'drizzle-orm';
import { db } from './db';
import { userProfiles } from './db/schema';
import { OnboardingFormData } from '@/components/form/onboarding/onboarding-form';

export async function userProfileExists(id: string) {
	return (await db.$count(userProfiles, eq(userProfiles.id, id))) > 0;
}

export async function createUserProfileWithData(
	id: string,
	firstName: string,
	lastName: string,
	data: OnboardingFormData
) {
	await db
		.insert(userProfiles)
		.values({
			id,
			firstName,
			lastName,
			biography: data.biography,
			technicalInterests: data.technologies.map(t => t.value),
			programmingLanguages: data.programmingLanguages.map(l => l.value),
		})
		.execute();
}
