'use server';

import { eq } from 'drizzle-orm';
import { db } from './db';
import { userProfiles } from './db/schema';
import { OnboardingFormData } from '@/components/form/onboarding/onboarding-form';
import { revalidateTag, unstable_cache } from 'next/cache';

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

	revalidateTag('user-profile');
}

export const getUserProfile = unstable_cache(
	async (id: string) => {
		return await db.select().from(userProfiles).where(eq(userProfiles.id, id));
	},
	['user-profile'],
	{ revalidate: 3600, tags: ['user-profile'] }
);
