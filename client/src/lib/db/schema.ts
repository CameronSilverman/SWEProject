import {
	boolean,
	integer,
	pgEnum,
	pgTable,
	text,
	varchar,
} from 'drizzle-orm/pg-core';

export const programmingLanguages = pgEnum('programming_languages', [
	'javascript',
	'typescript',
	'python',
	'java',
	'c++',
	'c#',
	'php',
	'ruby',
	'go',
	'swift',
	'kotlin',
	'rust',
	'other',
]);

export const technicalInterests = pgEnum('technical_interests', [
	'web',
	'mobile',
	'game',
	'embedded',
	'network',
	'data',
	'other',
]);

export const contributorRoles = pgEnum('contributor_roles', [
	'owner',
	'admin',
	'contributor',
]);

export const difficulty = pgEnum('difficulty', ['easy', 'medium', 'hard']);

export const userProfiles = pgTable('user_profiles', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	clerkId: varchar('clerk_id', { length: 256 }).notNull(),
	biography: text(),
	programmingLanguages: programmingLanguages().array(),
	technicalInterests: technicalInterests().array(),
});

export const projects = pgTable('projects', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 256 }),
	description: text(),
	archived: boolean().default(false),
	featured: boolean().default(false),
});

export const projectContributors = pgTable('project_contributors', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	projectId: integer()
		.references(() => projects.id)
		.notNull(),
	userId: integer()
		.references(() => userProfiles.id)
		.notNull(),
	role: contributorRoles().default('contributor'),
});

export const projectTasks = pgTable('project_tasks', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	projectId: integer()
		.references(() => projects.id)
		.notNull(),
	assigned: integer()
		.references(() => userProfiles.id)
		.array(),
	title: varchar({ length: 256 }).notNull(),
	description: text(),
	difficulty: difficulty().notNull(),
	completed: boolean().default(false),
});
